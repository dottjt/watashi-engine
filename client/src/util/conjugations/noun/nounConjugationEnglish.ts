import {
  createError,
  // removeGapIfValueEmpty,
  filtersentenceType,
  returnSentenceParts,
  createWord,
} from '../../functions';

import {
  nounPolarityPermissions, 
  nounConjugationPermissionsEnglish,
  nounIndefiniteArticlePermissionsEnglish,
} from './nounPermissions';

import {
  NOUN_CONJUGATION,
  NOUN_POLARITY,
  NOUN_INDEFINITE_ARTICLE,

  T,
  WA_TS,
  MO_TS,
  GA_TS,

  // WO_SV,
  // NI_SV,
  // DE_SV,
  
  // SENTENCE_TYPE_VERB,
  // SENTENCE_TYPE_TOPIC,
  // SENTENCE_TYPE_SUBJECT,

  // POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,

  CONJUGATION_TYPE_NOUN_ENGLISH,
} from '../../constants/optionsConstants';

const determineNounIndefiniteArticle = (words: Util.SentenceWords, noun: Util.Word, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounIndefiniteArticlePermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    const vowels = 'aeiou';
    const firstLetter = noun.english[0];

    if (vowels.includes(firstLetter)) {
      return createWord(['an'], NOUN_INDEFINITE_ARTICLE);
    } else {
      return createWord(['a'], NOUN_INDEFINITE_ARTICLE);
    };    
  };
  return createWord([''], NOUN_INDEFINITE_ARTICLE);
};

const determineNounPolarity = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounPolarityPermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    if (options.polarity === POLARITY_NEGATIVE) {
      return createWord(['not'], NOUN_POLARITY);
    }  
  }
  return createWord([''], NOUN_POLARITY);
};


const determineNounConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordElement => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounConjugationPermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, sentenceType);

  if (permissions) {
    if (options.variation === WA_TS || options.variation === T) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is'], NOUN_CONJUGATION);
        case `${TENSE_PAST}`: return createWord(['was'], NOUN_CONJUGATION);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - WA_TS', `${options.polarity}${options.tense} unknown`));
    }
  
    if (options.variation === MO_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is', 'also'], NOUN_CONJUGATION);
        case `${TENSE_PAST}`: return createWord(['was', 'also'], NOUN_CONJUGATION);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - MO_TS', `${options.tense} unknown`));
    }
    
    if (options.variation === GA_TS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return createWord(['is', 'the', 'one', 'that', 'is'], NOUN_CONJUGATION);
        case `${TENSE_PAST}`: return createWord(['is', 'the', 'one', 'that', 'was'], NOUN_CONJUGATION);
      };
      throw new Error(createError('conjugations/noun', 'determineNounConjugationEnglish - GA_TS', `${options.tense} unknown`));
    }  
  }
  return createWord([''], NOUN_CONJUGATION);
};

const nounConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.ConjugatedEnglishNoun => {
  const noun = filtersentenceType(words, sentenceType);
  const type = CONJUGATION_TYPE_NOUN_ENGLISH;

  const nounIndefiniteArticle = determineNounIndefiniteArticle(words, noun, sentenceType);
  const nounPolarity = determineNounPolarity(words, options, sentenceType);
  const nounTense = determineNounConjugationEnglish(words, options, sentenceType);

  return {
    nounTense,
    nounPolarity,
    nounIndefiniteArticle,
    noun,
    type,
  }
    // return `${nounTense} ${nounPolarity} ${nounIndefiniteArticle} ${word.english}`.trim();
};

export default nounConjugationEnglish;
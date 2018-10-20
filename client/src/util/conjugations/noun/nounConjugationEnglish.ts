import {
  createError,
  removeGapIfValueEmpty,
  filterWordType,
  returnSentenceParts,
} from '../../functions';

// import {
//   CATEGORY_HUMAN_NAME,
// } from '../../constants/wordConstants';

import {
  nounPolarityPermissions, 
  // nounEndingPermissionsEnglish,
} from './nounPermissions';

import {
  WA_SOB,
  WA_NS,
  MO_NS,
  GA_NS,

  // WO_VS,
  // NI_VS,
  // DE_VS,
  
  // VERB,
  TOPIC,
  SUBJECT,

  // POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  TENSE_PRESENT,
  TENSE_PAST,
} from '../../constants/optionsConstants';

const determineNounIndefiniteArticle = (word: Util.Word, wordType: string): string => {
  const vowels = 'aeiou';
  const firstLetter = word.english[0];

  if (wordType === TOPIC || wordType === SUBJECT) {
    if (vowels.includes(firstLetter)) {
      return 'an';
    } else {
      return 'a';
    };
  }
  return '';
};

const determineNounPolarity = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounPolarityPermissions(topic as Util.Word, subject as Util.Word, verb as Util.Word, wordType);

  if (options.polarity === POLARITY_NEGATIVE) {
    if (permissions) {
      return 'not';
    }
  }
  return '';
};


const determineNounTenseEnglish = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  // const { topic, subject, verb } = returnSentenceParts(words);
  // const permissions = nounEndingPermissionsEnglish(topic as Util.Word, subject as Util.Word, verb as Util.Word, wordType);

  // if (permissions) {
    if (options.variation === WA_NS || options.variation === WA_SOB) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return 'is';
        case `${TENSE_PAST}`: return 'was';
        default: return createError('conjugations/noun', 'determineNounTenseEnglish - WA_NS', `${options.polarity}${options.tense} unknown`);
      };
    }
  
    if (options.variation === MO_NS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return 'is also';
        case `${TENSE_PAST}`: return 'was also';
        default: return createError('conjugations/noun', 'determineNounTenseEnglish - MO_NS', `${options.tense} unknown`);
      };
    }
    
    if (options.variation === GA_NS) {
      switch(`${options.tense}`) {
        case `${TENSE_PRESENT}`: return 'is the one that is';
        case `${TENSE_PAST}`: return 'is the one that was';
        default:  return createError('conjugations/noun', 'determineNounTenseEnglish - GA_NS', `${options.tense} unknown`);
      };
    }  
  // }    
  return '';
};

const nounConjugationEnglish = (words: Util.SentenceWords, options: Util.Options, wordType: string): string => {
  const word = filterWordType(words, wordType);

  const nounIndefiniteArticle = determineNounIndefiniteArticle(word, wordType);
  const nounPolarity = determineNounPolarity(words, options, wordType);
  const nounTense = determineNounTenseEnglish(words, options, wordType);

  // if (wordType === SUBJECT) {
    return `${removeGapIfValueEmpty(nounTense)} ${nounPolarity} ${nounIndefiniteArticle} ${word.english}`.trim();
  // } else {
  //   return `${removeGapIfValueEmpty(nounTense)} ${nounPolarity} ${nounIndefiniteArticle} ${word.english}`.trim();
  // }
};

export default nounConjugationEnglish;
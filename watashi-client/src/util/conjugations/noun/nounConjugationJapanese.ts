import {
  createError, 
} from '../../functions';

import {
  determineJapaneseTense,
  returnSentenceParts,
  filtersentenceType,
  createWord,
} from '../utilConjugation';

import {
  nounParticlePermissions,
  nounConjugationPermissions,
} from './nounPermissions';


import {
  CATEGORY_HUMAN_NAME,
} from '../../constants/wordConstants';

import {
  __TYPENAME_CONJUGATED_JAPANESE_NOUN,
} from '../../constants/typeNameConstants';

import {
  uTop,
  top,
  adjTop,

  uTop_uSub,
  uTop_Sub,
  uTop_adjSub,
  top_Sub,
  top_adjSub,

  verb,
  verbAdv,
  verb_Sub,

  POLITENESS_CASUAL,
  POLITENESS_FORMAL,

  POLARITY_POSITIVE,
  POLARITY_NEGATIVE,

  GENDER_FEMININE,

  TENSE_PRESENT,
  TENSE_PAST,
} from '../../constants/optionsConstants';

import {
  JAPANESE_CONJUGATION,
  JAPANESE_TOPIC_PARTICLE,
  JAPANESE_CATEGORY_ENDING,
  JAPANESE_NOUN_DECLENSION,
  JAPANESE_TENSE,
  JAPANESE_POLARITY,
} from '../../constants/wordConstants';

const determinecategoryEnding = (noun: Util.Noun): Util.WordArrayElement[] => {
  // NOTE: Not 100% sure if this is still working. 
  const endingsArray = noun.nounCategory.map(categoryString => {
    switch(categoryString) {
      case `${CATEGORY_HUMAN_NAME}`: return createWord(['さ','ん'], JAPANESE_CATEGORY_ENDING);
      default: return createWord([''], JAPANESE_CATEGORY_ENDING);
    } 
  }).filter(categoryString => categoryString[0].word !== '');

  return endingsArray.length > 0 ? endingsArray[0] : createWord([''], JAPANESE_CATEGORY_ENDING);
};

const determineTopicParticleJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceType: string): Util.WordArrayElement[] => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounParticlePermissions(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  if (permissions) {
    // NOTE: I need to change the way this works, so it looks at the preposition, perhaps?
    switch (options.selectedVariation) {
      case uTop: return createWord(['は'], JAPANESE_TOPIC_PARTICLE);
      case top: return createWord(['は'], JAPANESE_TOPIC_PARTICLE);
      case adjTop: return createWord(['は'], JAPANESE_TOPIC_PARTICLE);
      
      // case uTop_uSub:
      // case uTop_Sub:
      // case uTop_adjSub:
      // case top_Sub:
      // case top_adjSub:

      // case verb:
      // case verbAdv:
      // case verb_Sub:
      // case T:     return createWord(['は'], JAPANESE_TOPIC_PARTICLE);
      // case WA_TS: return createWord(['は'], JAPANESE_TOPIC_PARTICLE);
      // case MO_TS: return createWord(['も'], JAPANESE_TOPIC_PARTICLE);
      // case GA_TS: return createWord(['が'], JAPANESE_TOPIC_PARTICLE);
      // case WO_SV: return createWord(['を'], JAPANESE_TOPIC_PARTICLE);
      // case NI_SV: return createWord(['に'], JAPANESE_TOPIC_PARTICLE);
      // case DE_SV: return createWord(['で'], JAPANESE_TOPIC_PARTICLE);
    }
    throw new Error(createError('conjugations/noun/nounConjugationJapanese', 'determineTopicParticleJapanese', 'options.variation unknown'));
  }
  return createWord([''], JAPANESE_TOPIC_PARTICLE);
};


const determineNounConjugationJapanese = (words: Util.SentenceWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): { japaneseNounTense: Util.WordArrayElement[], nounPolarity: Util.WordArrayElement[] } => {
  const { topic, subject, verb } = returnSentenceParts(words);
  const permissions = nounConjugationPermissions(topic as Util.Noun, subject as Util.Noun, verb as Util.Verb, sentenceType);

  const emptyWord = createWord([''], JAPANESE_CONJUGATION);

  const japaneseNounTense = determineJapaneseTense(sentenceContext);

  if (permissions) {
    switch(`${options.selectedPoliteness}${options.selectedPolarity}${japaneseNounTense}`) {

      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        if (options.selectedGender === GENDER_FEMININE) {
          return { japaneseNounTense: emptyWord, nounPolarity: emptyWord };
        } else {
          return { japaneseNounTense: createWord(['だ'], JAPANESE_TENSE), nounPolarity: emptyWord };
        }
        
      case `${POLITENESS_CASUAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return { japaneseNounTense: createWord(['だ','っ','た'], JAPANESE_TENSE), nounPolarity: emptyWord };

      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return { japaneseNounTense: emptyWord, nounPolarity: createWord(['じ','ゃ','な','い'], JAPANESE_POLARITY) };

      case `${POLITENESS_CASUAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return { japaneseNounTense: createWord(['か','っ','た'], JAPANESE_TENSE), nounPolarity: createWord(['じ','ゃ','な'], JAPANESE_POLARITY) };

      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PRESENT}`:
        return { japaneseNounTense: createWord(['で','す'], JAPANESE_TENSE), nounPolarity: emptyWord };

      case `${POLITENESS_FORMAL}${POLARITY_POSITIVE}${TENSE_PAST}`:
        return { japaneseNounTense: createWord(['で','し','た'], JAPANESE_TENSE), nounPolarity: emptyWord };

      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PRESENT}`:
        return { japaneseNounTense: emptyWord, nounPolarity: createWord(['じ','ゃ', 'あ','り','ま','せ','ん'], JAPANESE_POLARITY) };

      case `${POLITENESS_FORMAL}${POLARITY_NEGATIVE}${TENSE_PAST}`:
        return { japaneseNounTense: createWord(['で','し','た'], JAPANESE_TENSE), nounPolarity: createWord(['じ','ゃ','あ','り','ま','せ','ん'], JAPANESE_POLARITY) };
    }
    throw new Error(createError('conjugations/noun', 'determineNounConjugationJapanese', `${options.selectedPoliteness}${options.selectedPolarity}${japaneseNounTense} unknown`));
  }
  return { japaneseNounTense: emptyWord, nounPolarity: emptyWord };
};

const nounConjugationJapanese = (words: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  const noun = filtersentenceType(words, sentenceType) as Util.Noun;
  
  // const type = CONJUGATION_TYPE_NOUN_JAPANESE;

  const nounDeclension = createWord([noun.nounJapanese.kanji], JAPANESE_NOUN_DECLENSION);
  const { japaneseNounTense, nounPolarity } = determineNounConjugationJapanese(words, options, sentenceContext, sentenceType);
  const nounCategoryEnding = determinecategoryEnding(noun as Util.Noun);
  const nounTopicParticle = determineTopicParticleJapanese(words, options, sentenceType);

  return nounDeclension.concat(nounCategoryEnding).concat(nounPolarity).concat(japaneseNounTense).concat(nounTopicParticle);
};

export default nounConjugationJapanese;

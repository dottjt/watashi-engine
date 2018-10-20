// RESOURCES

export const RESOURCE_TAE_KIM = 'Tae Kim\'s Guide to Learning Japanese';
export const RESOURCE_WASABI = 'Wasabi';
export const RESOURCE_TAE_KIM_WEBSITE = 'http://www.guidetojapanese.org';
export const RESOURCE_WASABI_WEBSITE = 'https://www.wasabi-jpn.com';

import {
  getRandomWordViaCategory,
  filterSpecifcWord,
} from '../retrieve';

import {
  randomArrayElement,
} from '../functions';

import {
  WA_SOB,

  WA_NS,
  MO_NS,
  GA_NS,

  WO_VS,
  NI_VS,
  DE_VS,
} from './optionsConstants';

import generateExercises from '../conjugations';

import { 
  politenessArray,
  polarityArray,
  tenseArray,
  genderArray,

  politenessArrayLength,
  polarityArrayLength,
  tenseArrayLength,
  
  __TYPENAME_SENTENCE_DISPLAY_OPTIONS ,
} from './optionsConstants';

import {
  CATEGORY_HUMAN_NAME,
} from '../constants/wordConstants';

const createRes = (resourceType: string, urlString: string): Util.Resource => {
  if (resourceType === RESOURCE_TAE_KIM) {
    return {
      url: `${RESOURCE_TAE_KIM_WEBSITE}${urlString}`,
      website: RESOURCE_TAE_KIM_WEBSITE,
    }
  } else {
    return {
      url: `${RESOURCE_WASABI_WEBSITE}${urlString}`,
      website: RESOURCE_WASABI_WEBSITE,
    }
  };
};

export const LESSON_TITLE = {
  CALLBACK: 'Grammar Sensei Callback',
  LOGIN: 'Grammar Sensei Login',
  HOME: 'Grammar Sensei Home',
  CONTENTS: 'Grammar Sensei Contents',
  PREREQ: 'Grammar Sensei Prerequisites',
  L001: 'は state of being',
  L002: 'は noun statements',
  L003: 'は noun questions',
  L004: 'も noun statements',
  L005: 'も noun questions',
  L006: 'が noun statements',
  L007: 'が noun questions',
  L008: 'を verb statements',
  L009: 'を verb questions',
  L010: 'に verb statements',
  L011: 'に verb questions',
  L012: 'で verb statements',
  L013: 'で verb questions',
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
};

const LESSON_EXPLANATION = {
  L001: '',
  L002: '',
  L003: '',
  L004: '',
  L005: '',
  L006: '',
  L007: '',
  L008: '',
  L009: '',
  L010: '',
  L011: '',
  L012: '',
  L013: '',
  // L014
  // L015
  // L016
  // L017
  // L018
  // L019
  // L020
  // L021
};

const LESSON_VARIATION = {
  L001: WA_SOB,
  L002: WA_NS,
  L003: WA_NS,
  L004: MO_NS,
  L005: MO_NS,
  L006: GA_NS,
  L007: GA_NS,
  L008: WO_VS,
  L009: WO_VS,
  L010: NI_VS,
  L011: NI_VS,
  L012: DE_VS,
  L013: DE_VS,
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
};

const LESSON_WORDS = {
  L001: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: filterSpecifcWord(nouns, 'person') }), // TOPIC, // WA_SOB
  L002: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // TOPIC_PREDICATE, // WA_NS
  L003: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // TOPIC_PREDICATE, // WA_NS_QUESTION
  L004: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // TOPIC_PREDICATE, // MO_NS
  L005: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // TOPIC_PREDICATE, // MO_NS_QUESTION
  L006: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // TOPIC_PREDICATE, // GA_NS
  L007: (nouns: Util.Word[]): Util.SentenceWords => ({ topic: getRandomWordViaCategory(nouns, CATEGORY_HUMAN_NAME), predicate: { subject: filterSpecifcWord(nouns, 'person') }, }), // TOPIC_PREDICATE, // GA_NS_QUESTION
  L008: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: filterSpecifcWord(nouns, 'person') }, }), // PREDICATE, // WO_VS
  L009: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: filterSpecifcWord(nouns, 'person') }, }), // PREDICATE, // WO_VS_QUESTION
  L010: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: filterSpecifcWord(nouns, 'person') }, }), // PREDICATE, // NI_VS
  L011: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: filterSpecifcWord(nouns, 'person') }, }), // PREDICATE, // NI_VS_QUESTION
  L012: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: filterSpecifcWord(nouns, 'person') }, }), // PREDICATE, // DE_VS
  L013: (nouns: Util.Word[]): Util.SentenceWords => ({                                                              predicate: { subject: filterSpecifcWord(nouns, 'person'), verb: filterSpecifcWord(nouns, 'person') }, }), // PREDICATE, // DE_VS_QUESTION
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
};

const LESSON_RESOURCES = {
  L001: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WA_SOB
  L002: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WA_NS
  L003: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WA_NS_QUESTION
  L004: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // MO_NS
  L005: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // MO_NS_QUESTION
  L006: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // GA_NS
  L007: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // GA_NS_QUESTION
  L008: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WO_VS
  L009: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // WO_VS_QUESTION
  L010: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // NI_VS
  L011: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // NI_VS_QUESTION
  L012: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_VS
  L013: [ createRes(RESOURCE_TAE_KIM, '/learn/complete'), createRes(RESOURCE_WASABI, '') ], // DE_VS_QUESTION
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
}

const createLessonOptions = (variation: string, question: boolean): Util.Options => ({
  __typename: __TYPENAME_SENTENCE_DISPLAY_OPTIONS,
  politeness: politenessArray[randomArrayElement(politenessArrayLength)],
  polarity: polarityArray[randomArrayElement(polarityArrayLength)],
  tense: tenseArray[randomArrayElement(tenseArrayLength)],
  gender: genderArray[0],
  question,
  variation,
});

const LESSON_OPTIONS = {
  L001: () => createLessonOptions(LESSON_VARIATION.L001, false), // WA_SOB
  L002: () => createLessonOptions(LESSON_VARIATION.L002, true), // WA_NS
  L003: () => createLessonOptions(LESSON_VARIATION.L003, false), // WA_NS_QUESTION
  L004: () => createLessonOptions(LESSON_VARIATION.L004, true), // MO_NS
  L005: () => createLessonOptions(LESSON_VARIATION.L005, false), // MO_NS_QUESTION
  L006: () => createLessonOptions(LESSON_VARIATION.L006, true), // GA_NS
  L007: () => createLessonOptions(LESSON_VARIATION.L007, false), // GA_NS_QUESTION
  L008: () => createLessonOptions(LESSON_VARIATION.L008, true), // WO_VS
  L009: () => createLessonOptions(LESSON_VARIATION.L009, false), // WO_VS_QUESTION
  L010: () => createLessonOptions(LESSON_VARIATION.L010, true), // NI_VS
  L011: () => createLessonOptions(LESSON_VARIATION.L011, false), // NI_VS_QUESTION
  L012: () => createLessonOptions(LESSON_VARIATION.L012, true), // DE_VS
  L013: () => createLessonOptions(LESSON_VARIATION.L013, false), // DE_VS_QUESTION
  // L014:
  // L015:
  // L016:
  // L017:
  // L018:
  // L019:
  // L020:
  // L021:
};

export const L001 = {
  LESSON_TITLE: LESSON_TITLE.L001,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L001,
  LESSON_RESOURCES: LESSON_RESOURCES.L001,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L001(nouns) as any, LESSON_OPTIONS.L001, 10),
};

export const L002 = {
  LESSON_TITLE: LESSON_TITLE.L002,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L002,
  LESSON_RESOURCES: LESSON_RESOURCES.L002,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L002(nouns) as any, LESSON_OPTIONS.L002, 10),
};

export const L003 = {
  LESSON_TITLE: LESSON_TITLE.L003,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L003,
  LESSON_RESOURCES: LESSON_RESOURCES.L003,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L003(nouns) as any, LESSON_OPTIONS.L003, 10),
};

export const L004 = {
  LESSON_TITLE: LESSON_TITLE.L004,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L004,
  LESSON_RESOURCES: LESSON_RESOURCES.L004,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L004(nouns) as any, LESSON_OPTIONS.L004, 10),
};

export const L005 = {
  LESSON_TITLE: LESSON_TITLE.L005,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L005,
  LESSON_RESOURCES: LESSON_RESOURCES.L005,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L005(nouns) as any, LESSON_OPTIONS.L005, 10),
};

export const L006 = {
  LESSON_TITLE: LESSON_TITLE.L006,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L006,
  LESSON_RESOURCES: LESSON_RESOURCES.L006,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L006(nouns) as any, LESSON_OPTIONS.L006, 10),
};

export const L007 = {
  LESSON_TITLE: LESSON_TITLE.L007,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L007,
  LESSON_RESOURCES: LESSON_RESOURCES.L007,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L007(nouns) as any, LESSON_OPTIONS.L007, 10),
};

export const L008 = {
  LESSON_TITLE: LESSON_TITLE.L008,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L008,
  LESSON_RESOURCES: LESSON_RESOURCES.L008,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L008(nouns) as any, LESSON_OPTIONS.L008, 10),
};

export const L009 = {
  LESSON_TITLE: LESSON_TITLE.L009,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L009,
  LESSON_RESOURCES: LESSON_RESOURCES.L009,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L009(nouns) as any, LESSON_OPTIONS.L009, 10),
};

export const L010 = {
  LESSON_TITLE: LESSON_TITLE.L010,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L010,
  LESSON_RESOURCES: LESSON_RESOURCES.L010,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L010(nouns) as any, LESSON_OPTIONS.L010, 10),
};

export const L011 = {
  LESSON_TITLE: LESSON_TITLE.L011,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L011,
  LESSON_RESOURCES: LESSON_RESOURCES.L011,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L011(nouns) as any, LESSON_OPTIONS.L011, 10),
};

export const L012 = {
  LESSON_TITLE: LESSON_TITLE.L012,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L012,
  LESSON_RESOURCES: LESSON_RESOURCES.L012,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L012(nouns) as any, LESSON_OPTIONS.L012, 10),
};

export const L013 = {
  LESSON_TITLE: LESSON_TITLE.L013,
  LESSON_EXPLANATION: LESSON_EXPLANATION.L013,
  LESSON_RESOURCES: LESSON_RESOURCES.L013,
  LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
    generateExercises(LESSON_WORDS.L013(nouns) as any, LESSON_OPTIONS.L013, 10),
};

// export const L014 = {
//   LESSON_TITLE: LESSON_TITLE.L014,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L014,
//   LESSON_RESOURCES: LESSON_RESOURCES.L014,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_WORDS.L014(nouns) as any, LESSON_OPTIONS.L014, 10),
// };

// export const L015 = {
//   LESSON_TITLE: LESSON_TITLE.L015,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L015,
//   LESSON_RESOURCES: LESSON_RESOURCES.L015,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_WORDS.L015(nouns) as any, LESSON_OPTIONS.L015, 10),
// };

// export const L016 = {
//   LESSON_TITLE: LESSON_TITLE.L016,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L016,
//   LESSON_RESOURCES: LESSON_RESOURCES.L016,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_WORDS.L016(nouns) as any, LESSON_OPTIONS.L016, 10),
// };

// export const L017 = {
//   LESSON_TITLE: LESSON_TITLE.L017,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L017,
//   LESSON_RESOURCES: LESSON_RESOURCES.L017,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_WORDS.L017(nouns) as any, LESSON_OPTIONS.L017, 10),
// };

// export const L018 = {
//   LESSON_TITLE: LESSON_TITLE.L018,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L018,
//   LESSON_RESOURCES: LESSON_RESOURCES.L018,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_WORDS.L018(nouns) as any, LESSON_OPTIONS.L018, 10),
// };

// export const L019 = {
//   LESSON_TITLE: LESSON_TITLE.L019,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L019,
//   LESSON_RESOURCES: LESSON_RESOURCES.L019,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_WORDS.L019(nouns) as any, LESSON_OPTIONS.L019, 10),
// };

// export const L020 = {
//   LESSON_TITLE: LESSON_TITLE.L020,
//   LESSON_EXPLANATION: LESSON_EXPLANATION.L020,
//   LESSON_RESOURCES: LESSON_RESOURCES.L020,
//   LESSON_EXERCISES: (nouns: Util.Word[]): Util.EnglishJapaneseOptionsSentence[] =>  
//     generateExercises(LESSON_WORDS.L020(nouns) as any, LESSON_OPTIONS.L020, 10),
// };




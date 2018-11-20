import {
  createError,
} from '../functions';

import { 
  filterSpecifcWordNoun,
  // filterSpecifcCategoryNoun,
  // getRandomWordNoun,
  getRandomWordViaCategoryNoun,

  filterSpecifcWordVerb,
  // filterSpecifcCategoryVerb,
  getRandomWordVerb,
  // getRandomWordViaCategoryVerb,
} from '../filters';

import {
  NA,

  T,

  WA_TS,
  MO_TS,
  GA_TS,

  V,

  WO_SV,
  NI_SV,
  DE_SV,

  KARA_TS,
  MADE_TS,

  THEMES_DEFAULT,
} from '../constants/optionsConstants';

import {
  CATEGORY_HUMAN_NAME,
  CATEGORY_LOCATION,
} from '../constants/wordConstants';

const genTSV = ({ topic, subject, verb }: { topic?: Util.Topic, subject?: Util.Subject, verb?: Util.Verb } ): Util.SentenceWords => {
  if (topic && !subject && !verb) {
    return { topic };
  }
  if (topic && subject && !verb) {
    return { topic, predicate: { subject } };
  }
  if (!topic && subject && verb) {
    return { predicate: { subject, verb } };
  }
  if (!topic && !subject && verb) {
    return { predicate: { verb }};
  }
  if (topic && subject && verb) {
    return { topic, predicate: { subject, verb } };
  }

  throw new Error(createError('conjugations/generateWords.tsx', 'genTSV', `Your sentence variation does not exist`));
};

const VARIATION_T = 'VARIATION_T';
const VARIATION_TS = 'VARIATION_TS';
const VARIATION_V = 'VARIATION_V';
const VARIATION_SV = 'VARIATION_SV';
// const VARIATION_TSV = 'VARIATION_TSV';


const generateTopicWord = (nouns: Util.Noun[], selectedTheme: string, filteredVariation: string): Util.Noun => {
  switch(`${selectedTheme}${filteredVariation}`) {
    case `${THEMES_DEFAULT}${VARIATION_T}`: return filterSpecifcWordNoun(nouns, 'person');
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateTopicWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
};

const generateTopicSubjectWord = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string, filteredVariation: string): Util.Noun => {
  switch(`${selectedTheme}${filteredVariation}`) {
    case `${THEMES_DEFAULT}${VARIATION_TS}`: return getRandomWordViaCategoryNoun(nouns, CATEGORY_LOCATION);
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateSubjectWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
};

const generateVerbWord = (verbs: Util.Verb[], selectedTheme: string, filteredVariation: string): Util.Verb => {
  switch(`${selectedTheme}${filteredVariation}`) {
    case `${THEMES_DEFAULT}${VARIATION_V}`: return getRandomWordVerb(verbs);
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateSubjectWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
};

const generateSubjectVerbWord = (nouns: Util.Noun[], verbs: Util.Verb[], selectedTheme: string, filteredVariation: string): { subject: Util.Noun, verb: Util.Verb } => {
  switch(`${selectedTheme}${filteredVariation}`) {
    case `${THEMES_DEFAULT}${VARIATION_TS}`: return { subject: getRandomWordViaCategoryNoun(nouns, CATEGORY_LOCATION), verb: filterSpecifcWordVerb(verbs, 'eat') };
  };
  throw new Error(createError('conjugations/generateWords.tsx', 'generateSubjectWord', `Your options variation ${selectedTheme}${filteredVariation} does not exist`));
};


const filterDownVariationTypes = (variation: string): string => {
  switch(variation) {
    case NA: return 'NA';
    case T: return VARIATION_T;
    case WA_TS: return VARIATION_TS;
    case MO_TS: return VARIATION_TS;
    case GA_TS: return VARIATION_TS;
    case V: return VARIATION_V;
    case WO_SV: return VARIATION_SV;
    case NI_SV: return VARIATION_SV;
    case DE_SV: return VARIATION_SV;
    case KARA_TS: VARIATION_TS;
    case MADE_TS: VARIATION_TS;
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'filterDownVariationTypes', `Your options variation ${variation} does not exist`));
};

const generateWords = (nouns: Util.Noun[], verbs: Util.Verb[], options: Util.Options): () => Util.SentenceWords => {
  const filteredVariation = filterDownVariationTypes(options.selectedVariation);
  // const selectedVariation = options.selectedVariation;
  const selectedTheme = options.selectedTheme;

  switch(filteredVariation) {
    case VARIATION_T: {
      const topic = generateTopicWord(nouns, selectedTheme, filteredVariation);
      return () => genTSV({ topic, subject: undefined, verb: undefined });
    };
    case VARIATION_TS: {
      const { topic, subject } = generateTopicSubjectWord(nouns, verbs, selectedTheme, filteredVariation);
      return () => genTSV({ topic, subject, verb: undefined });
    };
    case VARIATION_V: {
      const verb = generateVerbWord(verbs, selectedTheme, filteredVariation);
      return () => genTSV({ topic: undefined, subject: undefined, verb, });
    };
    case VARIATION_SV: {
      const { subject, verb } = generateSubjectVerbWord(nouns, verbs, selectedTheme, filteredVariation);
      return () => genTSV({ topic: undefined, subject, verb, });
    };
  }
  throw new Error(createError('conjugations/generateWords.tsx', 'generateWords', `${filteredVariation} does not exist`));
};

export default generateWords;
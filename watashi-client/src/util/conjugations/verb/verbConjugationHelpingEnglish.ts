import {
  createError,
} from '../../functions';

import {
  createWord,
  createEmptyWord,
} from '../utilConjugation';

import {
  verbConjugationHelpingPermissionsEnglish,
} from './verbPermissions';


import {
  TENSE_SIMPLE_PRESENT,
  TENSE_PRESENT_CONTINUOUS,
  TENSE_PRESENT_PERFECT,
  // TENSE_PRESENT_PERFECT_CONTINUOUS,

  TENSE_SIMPLE_PAST,
  TENSE_PAST_CONTINUOUS,
  TENSE_PAST_PERFECT,
  TENSE_PAST_PERFECT_CONTINUOUS,

  TENSE_SIMPLE_FUTURE,
  TENSE_FUTURE_CONTINUOUS,
  TENSE_FUTURE_PERFECT,
  // TENSE_FUTURE_PERFECT_CONTINUOUS,
} from '../../constants/wordConstants';

import {
  CONTEXT_INTENT_EXISTENCE,
  CONTEXT_INTENT_POSSESSION,
  CONTEXT_INTENT_ACTION,

  CONTEXT_EVENT_OCCURANCE_BEFORE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST_NOW,
  CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST,
  CONTEXT_EVENT_OCCURANCE_NOW,
  CONTEXT_EVENT_OCCURANCE_NOW_FUTURE,
  CONTEXT_EVENT_OCCURANCE_FUTURE,

  CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS,
  CONTEXT_EVENT_DURATION_COMPLETE,

  CONTEXT_POV_SELF_SINGULAR,
  CONTEXT_POV_YOU_SINGULAR,
  CONTEXT_POV_HESHEIT_SINGULAR,
  CONTEXT_POV_WE_PLURAL,
  CONTEXT_POV_YOU_PLURAL,
  CONTEXT_POV_THEYTHOSE_PLURAL,

} from '../../constants/contextConstants';

import {
  __TYPENAME_CONJUGATED_ENGLISH_VERB,
} from '../../constants/typeNameConstants';

// import {
//   verbConjugationPermissionsEnglish,
// } from './verbPermissions';

const determineVerbConjugationHelpingEnglish = (context: Util.SentenceContext, options: Util.Options): Util.WordArrayElement[] => {
  
  const topicIntent = context.selectedTopicIntent;

  const eventOccurance = context.selectedEventOccurance;
  const eventDuration = context.selectedEventDuration;
  const eventPOV = context.selectedEventPOV;

  const permissions = verbConjugationHelpingPermissionsEnglish(options);

  if (permissions) {
    // simple present and simple past are the only difference between the common helping verbs
    if (topicIntent === CONTEXT_INTENT_EXISTENCE) {
      switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
        // Simple Past - Event that describes an event or action that happened in the past.     
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "was" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "was" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);
        
        // Simple Present - "Happening all the time, or exist now"
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "am" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "is" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
      }
    }

    if (topicIntent === CONTEXT_INTENT_POSSESSION) {
      switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
        // Simple Past - Event that describes an event or action that happened in the past.     
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "had" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "had" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "had" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "had" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "had" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "had" ], TENSE_SIMPLE_PAST);
        
        // Simple Present - "Happening all the time, or exist now"
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "have" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "have" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "has" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "have" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "have" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "have" ], TENSE_SIMPLE_PRESENT);
      }
    }

    if (topicIntent === CONTEXT_INTENT_ACTION) {
      switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
        // Simple Past - Event that describes an event or action that happened in the past.
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "did" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "did" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "did" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "did" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "did" ], TENSE_SIMPLE_PAST);
        case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "did" ], TENSE_SIMPLE_PAST);
        
        // Simple Present - Happening all the time, or exist now
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "do" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "do" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "does" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "do" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "do" ], TENSE_SIMPLE_PRESENT);
        case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "do" ], TENSE_SIMPLE_PRESENT);
      }
    }

    switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
      // Past Perfect - The tense that is used to make it clear that one event happened before another in the past
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
        return createWord([ "had" ], TENSE_PAST_PERFECT);

      // Past Continuous - A continuing action or event in a time which began or existed in the past. It can also be used to describe an unfinished action
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "was" ], TENSE_PAST_CONTINUOUS);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "were" ], TENSE_PAST_CONTINUOUS);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "was" ], TENSE_PAST_CONTINUOUS); 
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "were" ], TENSE_PAST_CONTINUOUS);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "were" ], TENSE_PAST_CONTINUOUS);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "were" ], TENSE_PAST_CONTINUOUS);

      // Simple Past - Event that describes an event or action that happened in the past.     
      // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "was" ], TENSE_SIMPLE_PAST);
      // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);
      // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "was" ], TENSE_SIMPLE_PAST);
      // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);
      // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);
      // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "were" ], TENSE_SIMPLE_PAST);

      // Present Perfect Continuous - "Started in the past and continuing to present time".    
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "have", "been" ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "has", "been" ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "have", "been" ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "have", "been" ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "have", "been" ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "have", "been" ], TENSE_SIMPLE_PAST);

      // Present Perfect - "Started in the past and continued to present time".
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: // should this maybe be has?
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
        return createWord([ "have" ], TENSE_PRESENT_PERFECT);

      // Past Perfect Continuous - started in the past and continued up until another time in the past
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
        return createWord([ "had", "been" ], TENSE_PAST_PERFECT_CONTINUOUS);

      //  Present Continuous - "Happening now, or unfinshed. Temporary actions."
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "am" ], TENSE_PRESENT_CONTINUOUS);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "are" ], TENSE_PRESENT_CONTINUOUS);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "is" ], TENSE_PRESENT_CONTINUOUS); 
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "are" ], TENSE_PRESENT_CONTINUOUS); 
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "are" ], TENSE_PRESENT_CONTINUOUS); 
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "are" ], TENSE_PRESENT_CONTINUOUS); 
      
      // Simple Present - "Happening all the time, or exist now"
      // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ "am" ], TENSE_SIMPLE_PRESENT);
      // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
      // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ "is" ], TENSE_SIMPLE_PRESENT);
      // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
      // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
      // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ "are" ], TENSE_SIMPLE_PRESENT);
      
      // Future Continuous - The tense that is used for an unfinished action or event that will occur in future and continue for an expected length of time
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
        return createWord([ "will", "be" ], TENSE_FUTURE_CONTINUOUS);

      // Simple Future - events which are expected, or likely to occur in the future.
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`:
      case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
        return createWord([ "will" ], TENSE_SIMPLE_FUTURE);

      // Future Perfect - actions that will be completed between now and some point in the future
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_SELF_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_WE_PLURAL}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_YOU_PLURAL}`: 
      case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_COMPLETE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
        return createWord([ "will", "have" ], TENSE_FUTURE_PERFECT);
        
      // Future Perfect Continuous - actions that will continue up until a point in the future
      //     case CONTEXT_POV_SELF_SINGULAR: return createWord([ "will", "have", "been", "being", presentParticiple ], TENSE_FUTURE_PERFECT_CONTINUOUS);
      // if (eventOccurance === CONTEXT_EVENT_OCCURANCE_UNKNOWN_FUTURE) {

      throw new Error(createError('determineVerbConjugationHelpingEnglish', 'determineVerbConjugationHelpingEnglish', `${eventOccurance}${eventDuration}${eventPOV} unknown`));
    }
  } 
    return createEmptyWord(TENSE_FUTURE_PERFECT);

}

const verbConjugationHelpingToBeEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceWordModifiers, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string): Util.WordArrayElement[] => {
  return determineVerbConjugationHelpingEnglish(sentenceContext, options);
};

export default verbConjugationHelpingToBeEnglish;


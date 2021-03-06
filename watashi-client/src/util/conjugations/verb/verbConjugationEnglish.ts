import {
  createError,
} from '../../functions';

import {
  filtersentenceType,
  // returnSentenceParts,
  createWord,
} from '../utilConjugation';

// import {
//   POLARITY_POSITIVE,
//   POLARITY_NEGATIVE,
// } from '../../constants/optionsConstants';

import {
  // ENGLISH_POLARITY,

  TENSE_SIMPLE_PRESENT,
  TENSE_PRESENT_CONTINUOUS,
  TENSE_PRESENT_PERFECT,
  TENSE_PRESENT_PERFECT_CONTINUOUS,

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

  CONTEXT_EVENT_DURATION_CONTINUOUS,
  CONTEXT_EVENT_DURATION_SINGLE,

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

const determineVerbCongjuationCommonEnglish = (verb: Util.Verb, sentenceContext: Util.SentenceContext, additionalContext: string): { infinitive: string, presentParticiple: string, pastParticiple: string, simplePresentContinuousHeSheIt: string } => {
  if (additionalContext === "HELPING_VERB_NO_VERB") {
    
    switch(`${sentenceContext.selectedEventOccurance}${sentenceContext.selectedEventDuration}`) {
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}`:
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}`:
        return {
          infinitive: '',
          presentParticiple: '',
          // preterite: '',
          pastParticiple: '',
          simplePresentContinuousHeSheIt: '',  
        }
      default: 
        if (sentenceContext.selectedTopicIntent === CONTEXT_INTENT_EXISTENCE) {
          return {
            infinitive: 'be',
            presentParticiple: 'being',
            // preterite: 'was',
            pastParticiple: 'been',
            simplePresentContinuousHeSheIt: 'is',  
          };
        }
        if (sentenceContext.selectedTopicIntent === CONTEXT_INTENT_POSSESSION) {
          return {
            infinitive: 'have',
            presentParticiple: 'having',
            // preterite: 'had',
            pastParticiple: 'had',
            simplePresentContinuousHeSheIt: 'has',  
          };
        }
        if (sentenceContext.selectedTopicIntent === CONTEXT_INTENT_ACTION) {
          return {
            infinitive: 'did',
            presentParticiple: 'do',
            // preterite: 'did',
            pastParticiple: 'done',
            simplePresentContinuousHeSheIt: 'does',  
          };
        }
      }
  }

  return {
    infinitive: verb.verbEnglish.infinitive, // "to hack";
    presentParticiple: verb.verbEnglish.presentParticiple, // "hacking";
    // preterite: '',
    pastParticiple: verb.verbEnglish.pastParticiple, //"hacked";
    simplePresentContinuousHeSheIt: verb.verbEnglish.simplePresentContinuousHeSheIt, // "hacks"; 
  };
}

const determineVerbConjugationEnglish = (verb: Util.Verb, context: Util.SentenceContext, additionalContext: string): Util.WordArrayElement[] => {
  // Note: This needs to be scoped out for to be and other things. 

  const topicIntent = context.selectedTopicIntent;

  const eventOccurance = context.selectedEventOccurance;
  const eventDuration = context.selectedEventDuration;
  const eventPOV = context.selectedEventPOV;

  const { 
    infinitive,
    presentParticiple,
    pastParticiple,
    simplePresentContinuousHeSheIt,
  } = determineVerbCongjuationCommonEnglish(verb, context, additionalContext);

  // simple present and simple past are the only difference between the common helping verbs
  if (topicIntent === CONTEXT_INTENT_EXISTENCE) {
    switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
      // Simple Past - Event that describes an event or action that happened in the past.     
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      
      // Simple Present - "Happening all the time, or exist now"
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ presentParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ presentParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ simplePresentContinuousHeSheIt ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ presentParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ presentParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ presentParticiple ], TENSE_SIMPLE_PRESENT);
    }
  }

  if (topicIntent === CONTEXT_INTENT_POSSESSION) {
    switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
      // Simple Past - Event that describes an event or action that happened in the past.     
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);
      
      // Simple Present - "Happening all the time, or exist now"
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ pastParticiple ], TENSE_SIMPLE_PRESENT);
    }
  }

  if (topicIntent === CONTEXT_INTENT_ACTION) {
    switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
      // Simple Past - Event that describes an event or action that happened in the past.
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PAST);
      case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PAST);
      
      // Simple Present - Happening all the time, or exist now
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
      case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
    }
  }

  switch(`${eventOccurance}${eventDuration}${eventPOV}`) {
    // Past Perfect - The tense that is used to make it clear that one event happened before another in the past
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_BEFORE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return createWord([ pastParticiple ], TENSE_PAST_PERFECT);

    // Past Continuous - A continuing action or event in a time which began or existed in the past. It can also be used to describe an unfinished action
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return createWord([ presentParticiple ], TENSE_PAST_CONTINUOUS);

    // // Simple Past - Event that describes an event or action that happened in the past.     
    // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    // case `${CONTEXT_EVENT_OCCURANCE_PAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
    //   return createWord([ pastParticiple ], TENSE_SIMPLE_PAST);

    // Present Perfect Continuous - "Started in the past and continuing to present time".    
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return createWord([ "have been", pastParticiple ], TENSE_PRESENT_PERFECT_CONTINUOUS);

    // Present Perfect - "Started in the past and continued to present time".
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ pastParticiple ], TENSE_PRESENT_PERFECT);
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ pastParticiple ], TENSE_PRESENT_PERFECT);
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ pastParticiple ], TENSE_PRESENT_PERFECT); 
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ pastParticiple ], TENSE_PRESENT_PERFECT);
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ pastParticiple ], TENSE_PRESENT_PERFECT);
    case `${CONTEXT_EVENT_OCCURANCE_PAST_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ pastParticiple ], TENSE_PRESENT_PERFECT);

    // Past Perfect Continuous - started in the past and continued up until another time in the past
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`:
    case `${CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`:
      return createWord([ presentParticiple ], TENSE_PAST_PERFECT_CONTINUOUS);
  
    //  Present Continuous - "Happening now, or unfinshed. Temporary actions."   
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`:
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
      return createWord([ presentParticiple ], TENSE_PRESENT_CONTINUOUS);

    // // Simple Present - "Happening all the time, or exist now"
    // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
    // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
    // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ simplePresentContinuousHeSheIt ], TENSE_SIMPLE_PRESENT);
    // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
    // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
    // case `${CONTEXT_EVENT_OCCURANCE_NOW}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_PRESENT);
    
    // Future Continuous - The tense that is used for an unfinished action or event that will occur in future and continue for an expected length of time
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ presentParticiple ], TENSE_FUTURE_CONTINUOUS);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ presentParticiple ], TENSE_FUTURE_CONTINUOUS);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ presentParticiple ], TENSE_FUTURE_CONTINUOUS); 
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: return createWord([ presentParticiple ], TENSE_FUTURE_CONTINUOUS);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ presentParticiple ], TENSE_FUTURE_CONTINUOUS);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ presentParticiple ], TENSE_FUTURE_CONTINUOUS);

    // Simple Future - events which are expected, or likely to occur in the future.
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_FUTURE);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_FUTURE);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: return createWord([ infinitive ], TENSE_SIMPLE_FUTURE); 
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_FUTURE);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_FUTURE);
    case `${CONTEXT_EVENT_OCCURANCE_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: return createWord([ infinitive ], TENSE_SIMPLE_FUTURE);
    
    // Future Perfect - actions that will be completed between now and some point in the future
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_SELF_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_WE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_YOU_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_CONTINUOUS}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_SELF_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_HESHEIT_SINGULAR}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_WE_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_YOU_PLURAL}`: 
    case `${CONTEXT_EVENT_OCCURANCE_NOW_FUTURE}${CONTEXT_EVENT_DURATION_SINGLE}${CONTEXT_POV_THEYTHOSE_PLURAL}`: 
      return createWord([ pastParticiple ], TENSE_FUTURE_PERFECT);
       
    // Future Perfect Continuous - actions that will continue up until a point in the future
    //     case CONTEXT_POV_SELF_SINGULAR: return createWord([ "will have been", presentParticiple ], TENSE_FUTURE_PERFECT_CONTINUOUS);
    // if (eventOccurance === CONTEXT_EVENT_OCCURANCE_UNKNOWN_FUTURE) {
  }

  throw new Error(createError('verbConjugationEnglish', 'determineVerbConjugationEnglish', `${eventOccurance}${eventDuration}${eventPOV} unknown`));  
}


const verbConjugationEnglish = (words: Util.SentenceWords, modifiers: Util.SentenceModifierWords, options: Util.Options, sentenceContext: Util.SentenceContext, sentenceType: string, additionalContext: string): Util.WordArrayElement[] => {
  const verb = filtersentenceType(words, sentenceType) as Util.Verb;
  const verbConjugation = determineVerbConjugationEnglish(verb, sentenceContext, additionalContext);

  return verbConjugation;
};

export default verbConjugationEnglish;

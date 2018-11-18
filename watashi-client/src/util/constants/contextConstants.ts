// preposition type

// export const PREPOSITION_TYPE_TIME = "PREPOSITION_TYPE_TIME";
// export const PREPOSITION_TYPE_PLACE = "PREPOSITION_TYPE_PLACE";
// export const PREPOSITION_TYPE_DIRECTION = "PREPOSITION_TYPE_DIRECTION";
// export const PREPOSITION_TYPE_AGENCY = "PREPOSITION_TYPE_AGENCY";
// export const PREPOSITION_TYPE_PURPOSE = "PREPOSITION_TYPE_PURPOSE";
// export const PREPOSITION_TYPE_REASON = "PREPOSITION_TYPE_REASON";
// export const PREPOSITION_TYPE_CONNECTION = "PREPOSITION_TYPE_CONNECTION";
// export const PREPOSITION_TYPE_ORIGIN = "PREPOSITION_TYPE_ORIGIN";




  // figure out monday.
  // const sentenceContext = {
  //   eventPOV: '',

  //   topicPosition: 'CONTEXT_TOPIC_POSITION_NEAR',
  //   topicDestination: "CONTEXT_TOPIC_RELATIVE_TOPIC_DESTINATION_INSIDE",
  //   eventDirection: "CONTEXT_DIRECTION_TOWARD",  
    
  //   eventOccurance: 'CONTEXT_EVENT_OCCURANCE_NOW',
  //   eventDuration: 'CONTEXT_EVENT_DURATION_COMPLETE',

  //   subjectConnection: 'CONTEXT_SUBJECT_CONNECTION_IN_CONJUNCTION',
  //   subjectRole: 'CONTEXT_SUBJECT_CONNECTION_IN_CONJUNCTION',
  // };


// Different types of context. 
// topic context.
export const CONTEXT_TYPE_TOPIC_POSITION = "CONTEXT_TYPE_TOPIC_POSITION";
export const CONTEXT_TYPE_TOPIC_DESTINATION = "CONTEXT_TYPE_TOPIC_DESTINATION";
export const CONTEXT_TYPE_EVENT_DIRECTION = "CONTEXT_TYPE_EVENT_DIRECTION";

export const CONTEXT_TYPE_EVENT_OCCURANCE = "CONTEXT_TYPE_EVENT_OCCURANCE";
export const CONTEXT_TYPE_EVENT_DURATION = "CONTEXT_TYPE_EVENT_DURATION";
export const CONTEXT_TYPE_EVENT_POV = "CONTEXT_TYPE_EVENT_POV";

// subject context.
export const CONTEXT_TYPE_SUBJECT_CONNECTION = "CONTEXT_TYPE_SUBJECT_CONNECTION";
export const CONTEXT_TYPE_SUBJECT_ROLE = "CONTEXT_TYPE_SUBJECT_ROLE";


/* Point of View */

export const CONTEXT_POV_SELF_SINGULAR = "CONTEXT_POV_SELF_SINGULAR";
export const CONTEXT_POV_YOU_SINGULAR = "CONTEXT_POV_YOU_SINGULAR";
export const CONTEXT_POV_HESHEIT_SINGULAR = "CONTEXT_POV_HESHEIT_SINGULAR";
export const CONTEXT_POV_WE_PLURAL = "CONTEXT_POV_WE_PLURAL";
export const CONTEXT_POV_YOU_PLURAL = "CONTEXT_POV_YOU_PLURAL";
export const CONTEXT_POV_THEYTHOSE_PLURAL = "CONTEXT_POV_THEYTHOSE_PLURAL";

export const contextEventPOVArray = [
  CONTEXT_POV_SELF_SINGULAR,
  CONTEXT_POV_YOU_SINGULAR,
  CONTEXT_POV_HESHEIT_SINGULAR,
  CONTEXT_POV_WE_PLURAL,
  CONTEXT_POV_YOU_PLURAL,
  CONTEXT_POV_THEYTHOSE_PLURAL,
];

export const contextEventPOVArrayLength = contextEventPOVArray.length;

/* Context Time - when */

export const CONTEXT_EVENT_OCCURANCE_RANDOM = "CONTEXT_EVENT_OCCURANCE_RANDOM";
export const CONTEXT_EVENT_OCCURANCE_BEFORE_PAST = "CONTEXT_EVENT_OCCURANCE_PAST";
export const CONTEXT_EVENT_OCCURANCE_PAST = "CONTEXT_EVENT_OCCURANCE_PAST";
export const CONTEXT_EVENT_OCCURANCE_PAST_NOW = "CONTEXT_EVENT_OCCURANCE_PAST_NOW";
export const CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST = "CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST";
export const CONTEXT_EVENT_OCCURANCE_NOW = "CONTEXT_EVENT_OCCURANCE_NOW";
export const CONTEXT_EVENT_OCCURANCE_NOW_FUTURE = "CONTEXT_EVENT_OCCURANCE_NOW_FUTURE";
export const CONTEXT_EVENT_OCCURANCE_FUTURE = "CONTEXT_EVENT_OCCURANCE_FUTURE";

// export const CONTEXT_EVENT_OCCURANCE_ONE_BEFORE = "CONTEXT_EVENT_OCCURANCE_ONE_BEFORE";
// export const CONTEXT_EVENT_OCCURANCE_ONE_AHEAD = "CONTEXT_EVENT_OCCURANCE_ONE_AHEAD";
// export const CONTEXT_EVENT_OCCURANCE_BEGINNING_OF_TIME = "CONTEXT_EVENT_OCCURANCE_BEGINNING_OF_TIME";
// export const CONTEXT_EVENT_OCCURANCE_END_OF_TIME = "CONTEXT_EVENT_OCCURANCE_END_OF_TIME";
// export const CONTEXT_EVENT_OCCURANCE_AT_TIMES = "CONTEXT_EVENT_OCCURANCE_AT_TIMES";
// export const CONTEXT_EVENT_OCCURANCE_ALL_THE_TIME = "CONTEXT_EVENT_OCCURANCE_ALL_THE_TIME";


export const contextEventOccuranceArray = [
  CONTEXT_EVENT_OCCURANCE_BEFORE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST,
  CONTEXT_EVENT_OCCURANCE_PAST_NOW,
  CONTEXT_EVENT_OCCURANCE_PAST_FUTUREPAST,
  CONTEXT_EVENT_OCCURANCE_NOW,
  CONTEXT_EVENT_OCCURANCE_NOW_FUTURE,
  CONTEXT_EVENT_OCCURANCE_FUTURE,
];

export const contextEventOccuranceArrayLength = contextEventOccuranceArray.length;

/* Context Time - Duration (how long) */

export const CONTEXT_EVENT_DURATION_RANDOM = "CONTEXT_EVENT_DURATION_RANDOM";
export const CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS = "CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS";
export const CONTEXT_EVENT_DURATION_COMPLETE = "CONTEXT_EVENT_DURATION_COMPLETE";
// export const CONTEXT_EVENT_DURATION_UNKNOWN = "CONTEXT_EVENT_DURATION_UNKNOWN";

export const contextDurationArray = [
  CONTEXT_EVENT_DURATION_PARTIAL_CONTINUOUS,
  CONTEXT_EVENT_DURATION_COMPLETE,
];

export const contextDurationArrayLength = contextDurationArray.length

/* Context Location - Topic Position (how far) */

export const CONTEXT_TOPIC_POSITION_RANDOM = "CONTEXT_TOPIC_POSITION_RANDOM";
export const CONTEXT_TOPIC_POSITION_NEAR = "CONTEXT_TOPIC_POSITION_NEAR";
export const CONTEXT_TOPIC_POSITION_FAR = "CONTEXT_TOPIC_POSITION_FAR";
export const CONTEXT_TOPIC_POSITION_AT = "CONTEXT_TOPIC_POSITION_AT";
export const CONTEXT_TOPIC_POSITION_INSIDE = "CONTEXT_TOPIC_POSITION_INSIDE";

export const contextTopicPositionArray = [
  CONTEXT_TOPIC_POSITION_NEAR,
  CONTEXT_TOPIC_POSITION_FAR,
  CONTEXT_TOPIC_POSITION_AT,
  CONTEXT_TOPIC_POSITION_INSIDE,
];

export const contextTopicPositionArrayLength = contextTopicPositionArray.length

/* Context Location - Destination (where to) */

export const CONTEXT_TOPIC_DESTINATION_RANDOM = "CONTEXT_TOPIC_DESTINATION_RANDOM";

export const CONTEXT_TOPIC_DESTINATION_NONE = "CONTEXT_TOPIC_DESTINATION_NONE";

export const CONTEXT_Y_TOPIC_DESTINATION_ABOVE = "CONTEXT_Y_TOPIC_DESTINATION_ABOVE";
export const CONTEXT_Y_TOPIC_DESTINATION_BELOW = "CONTEXT_Y_TOPIC_DESTINATION_BELOW";

export const CONTEXT_Y_TOPIC_DESTINATION_BEHIND = "CONTEXT_Y_TOPIC_DESTINATION_BEHIND";
export const CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT = "CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT";

export const CONTEXT_TOPIC_DESTINATION_ALONG = "CONTEXT_TOPIC_DESTINATION_ALONG";
export const CONTEXT_TOPIC_DESTINATION_BESIDE = "CONTEXT_TOPIC_DESTINATION_BESIDE";
export const CONTEXT_TOPIC_DESTINATION_WITH = "CONTEXT_TOPIC_DESTINATION_WITH";

export const CONTEXT_TOPIC_DESTINATION_BETWEEN = "CONTEXT_TOPIC_DESTINATION_BETWEEN";
export const CONTEXT_TOPIC_DESTINATION_THROUGH = "CONTEXT_TOPIC_DESTINATION_THROUGH";

export const CONTEXT_TOPIC_DESTINATION_INSIDE = "CONTEXT_TOPIC_DESTINATION_INSIDE";
export const CONTEXT_TOPIC_DESTINATION_OUTSIDE = "CONTEXT_TOPIC_DESTINATION_OUTSIDE";

export const contextTopicDestinationArray = [
  CONTEXT_TOPIC_DESTINATION_NONE,
  CONTEXT_Y_TOPIC_DESTINATION_ABOVE,
  CONTEXT_Y_TOPIC_DESTINATION_BELOW,
  CONTEXT_Y_TOPIC_DESTINATION_BEHIND,
  CONTEXT_Y_TOPIC_DESTINATION_IN_FRONT,
  CONTEXT_TOPIC_DESTINATION_ALONG,
  CONTEXT_TOPIC_DESTINATION_BESIDE,
  CONTEXT_TOPIC_DESTINATION_WITH,
  CONTEXT_TOPIC_DESTINATION_BETWEEN,
  CONTEXT_TOPIC_DESTINATION_THROUGH,
  CONTEXT_TOPIC_DESTINATION_INSIDE,
  CONTEXT_TOPIC_DESTINATION_OUTSIDE,
];

export const contextTopicDestinationArrayLength = contextTopicDestinationArray.length

/* Context Location - Direction (how to) */

export const CONTEXT_DIRECTION_RANDOM = "CONTEXT_DIRECTION_RANDOM";
export const CONTEXT_DIRECTION_NONE = "CONTEXT_DIRECTION_NONE";

export const CONTEXT_DIRECTION_TOWARD = "CONTEXT_DIRECTION_TOWARD";
export const CONTEXT_DIRECTION_AWAY = "CONTEXT_DIRECTION_AWAY";

export const CONTEXT_Y_DIRECTION_UP = "CONTEXT_DIRECTION_UP";
export const CONTEXT_Y_DIRECTION_DOWN = "CONTEXT_DIRECTION_DOWN";
export const CONTEXT_X_DIRECTION_LEFT = "CONTEXT_X_DIRECTION_LEFT";
export const CONTEXT_X_DIRECTION_RIGHT = "CONTEXT_X_DIRECTION_RIGHT";

export const CONTEXT_X_DIRECTION_ACROSS = "CONTEXT_DIRECTION_ACROSS";

export const contextDirectionArray = [
  CONTEXT_DIRECTION_NONE,
  CONTEXT_DIRECTION_TOWARD,
  CONTEXT_DIRECTION_AWAY,
  CONTEXT_Y_DIRECTION_UP,
  CONTEXT_Y_DIRECTION_DOWN,
  CONTEXT_X_DIRECTION_LEFT,
  CONTEXT_X_DIRECTION_RIGHT,
  CONTEXT_X_DIRECTION_ACROSS,
];

export const contextDirectionArrayLength = contextDirectionArray.length

/* Context Subject Connection */

export const CONTEXT_SUBJECT_CONNECTION_RANDOM = "CONTEXT_SUBJECT_CONNECTION_RANDOM";
export const CONTEXT_SUBJECT_CONNECTION_IN_CONJUNCTION = "CONTEXT_SUBJECT_CONNECTION_IN_CONJUNCTION";
export const CONTEXT_SUBJECT_CONNECTION_INDEPENDENT = "CONTEXT_SUBJECT_CONNECTION_INDEPENDENT";

export const contextSubjectConnectionArray = [
  CONTEXT_SUBJECT_CONNECTION_IN_CONJUNCTION,
  CONTEXT_SUBJECT_CONNECTION_INDEPENDENT,
];

export const contextSubjectConnectionArrayLength = contextSubjectConnectionArray.length

/* Context Subject Role */

export const CONTEXT_SUBJECT_ROLE_RANDOM = "CONTEXT_SUBJECT_ROLE_RANDOM";
export const CONTEXT_SUBJECT_ROLE_DIRECT = "CONTEXT_SUBJECT_ROLE_DIRECT";
export const CONTEXT_SUBJECT_ROLE_SECOND_HAND = "CONTEXT_SUBJECT_ROLE_SECOND_HAND";
export const CONTEXT_SUBJECT_ROLE_ON_BEHALF_OF = "CONTEXT_SUBJECT_ROLE_ON_BEHALF_OF";
export const CONTEXT_SUBJECT_ROLE_BECAUSE_OF = "CONTEXT_SUBJECT_ROLE_BECAUSE_OF";

export const contextSubjectRoleArray = [
  CONTEXT_SUBJECT_ROLE_DIRECT,
  CONTEXT_SUBJECT_ROLE_SECOND_HAND,
  CONTEXT_SUBJECT_ROLE_ON_BEHALF_OF,
  CONTEXT_SUBJECT_ROLE_BECAUSE_OF,
];

export const contextSubjectRoleArrayLength = contextSubjectRoleArray.length


// /* Context Instrument */

// export const CONTEXT_INSTRUMENT_BY = "CONTEXT_INSTRUMENT_BY";
// export const CONTEXT_INSTRUMENT_WITH = "CONTEXT_INSTRUMENT_WITH";
// export const CONTEXT_INSTRUMENT_ON = "CONTEXT_INSTRUMENT_ON";

// /* Context Reason  */

// for 
// through
// because of 
// on account of
// from 


/* Context Observe */

// export const CONTEXT_OBSERVE_INSIDE = "CONTEXT_OBSERVE_INSIDE";
// export const CONTEXT_OBSERVE_OUTSIDE = "CONTEXT_OBSERVE_OUTSIDE";


// /* TIME */

// // // Date
// export const CONTEXT_EVENT_OCCURANCE_DATE_ON = "CONTEXT_EVENT_OCCURANCE_DATE_ON";
// export const CONTEXT_EVENT_OCCURANCE_DATE_IN = "CONTEXT_EVENT_OCCURANCE_DATE_IN";
// export const CONTEXT_EVENT_OCCURANCE_DATE_AT = "CONTEXT_EVENT_OCCURANCE_DATE_AT";

// // // Point of time
// export const CONTEXT_EVENT_OCCURANCE_POINT_OF_TIME_SINCE = "CONTEXT_EVENT_OCCURANCE_POINT_OF_TIME_SINCE";
// export const CONTEXT_EVENT_OCCURANCE_POINT_OF_TIME_BEFORE = "CONTEXT_EVENT_OCCURANCE_POINT_OF_TIME_BEFORE";
// export const CONTEXT_EVENT_OCCURANCE_POINT_OF_TIME_AFTER = "CONTEXT_EVENT_OCCURANCE_POINT_OF_TIME_AFTER";
// export const CONTEXT_EVENT_OCCURANCE_TIME_BY = "CONTEXT_EVENT_OCCURANCE_TIME_BY";
// export const CONTEXT_EVENT_OCCURANCE_TIME_AGO = "CONTEXT_EVENT_OCCURANCE_TIME_AGO";

// // // Period of time
// export const CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_FOR = "CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_FOR";
// export const CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_TO = "CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_TO";
// export const CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_TILL = "CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_TILL";
// export const CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_UNTIL = "CONTEXT_EVENT_OCCURANCE_PERIOD_OF_TIME_UNTIL";

// // // Telling the time
// export const CONTEXT_EVENT_OCCURANCE_TELL_TIME_TO = "CONTEXT_EVENT_OCCURANCE_TELL_TIME_TO";
// export const CONTEXT_EVENT_OCCURANCE_TELL_TIME_PAST = "CONTEXT_EVENT_OCCURANCE_TELL_TIME_PAST";



/* Context Internal State */

// export const CONTEXT_INTERNAL_STATE_ON = "CONTEXT_INTERNAL_STATE_ON";
// export const CONTEXT_INTERNAL_STATE_OFF = "CONTEXT_INTERNAL_STATE_OFF";
// export const CONTEXT_INTERNAL_STATE_DEAD = "CONTEXT_INTERNAL_STATE_DEAD";
// export const CONTEXT_INTERNAL_STATE_ALIVE = "CONTEXT_INTERNAL_STATE_ALIVE";
// export const CONTEXT_INTERNAL_STATE_WORKING = "CONTEXT_INTERNAL_STATE_WORKING";
// export const CONTEXT_INTERNAL_STATE_BROKEN = "CONTEXT_INTERNAL_STATE_BROKEN";

// /* Context Status */
// export const CONTEXT_STATUS_WILL_DO = "CONTEXT_STATUS_WILL_DO";
// export const CONTEXT_STATUS_CURRENTLY_DOING = "CONTEXT_STATUS_CURRENTLY_DOING";
// export const CONTEXT_STATUS_HAS_DONE = "CONTEXT_STATUS_HAS_DONE";

/* Context Quantity */

// export const CONTEXT_QUANTITY_SINGLE = "CONTEXT_QUANTITY_SINGLE";
// export const CONTEXT_QUANTITY_MULTIPLE = "CONTEXT_QUANTITY_MULTIPLE";

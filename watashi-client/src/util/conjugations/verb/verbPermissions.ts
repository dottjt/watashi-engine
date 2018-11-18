import {
  createCommonPermissions,
} from '../utilConjugation';

// Japanese

export const verbConjugationPermissionsEnglish = (topic: Util.Noun, subject: Util.Noun, verb: Util.Verb, sentenceType: string): boolean => {
  const { onlyTopic, onlySubject, onlyVerb, onlySubjectAndVerb, onlyTopicAndSubjectTOPIC, onlyTopicAndSubjectSUBJECT } = createCommonPermissions(topic, subject, verb, sentenceType);
  
  if (onlyTopic) { return false }; // technically not possible.
  if (onlySubject) { return false }; // technically not possible.
  if (onlyVerb) { return true };
  if (onlySubjectAndVerb) { return true };
  if (onlyTopicAndSubjectTOPIC) { return false }; // technically not possible.
  if (onlyTopicAndSubjectSUBJECT) { return false }; // technically not possible.

  throw new Error('verbConjugationPermissionsEnglish - sentence situation not covered');
};

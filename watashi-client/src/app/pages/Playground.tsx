import * as React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { Flex, FlexColumn, PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading, Heading } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/routeConstants';

import Helmet from '../components/Helmet';

import {
  variationArray,
  questionArray,
  polarityArray,
  tenseArray,
  politenessArray,
  genderArray,
  sentenceEndingArray,
  themesArray,
} from '../../util/constants/optionsConstants';

// import {
//   topicNoArray,
//   subjectNoArray,
//   topicAdjectiveArray,
//   topicAdverbArray,
//   subjectAdjectiveArray,
//   subjectAdverbArray,  
// } from '../../util/constants/modifiersConstants';

// import {
//   contextIntentArray,
//   contextProximityArray,
//   contextTopicDestinationArray,
//   contextDirectionArray,
//   contextEventOccuranceArray,
//   contextDurationArray,
//   contextEventPOVArray,
//   contextSubjectConnectionArray,
//   contextSubjectRoleArray,
//   contextSubjectQuantityArray,  
// } from '../../util/constants/contextConstants';

import { 
  __TYPENAME_PRE_OPTIONS,
  __TYPENAME_PRE_MODIFIERS,
  __TYPENAME_PRE_SENTENCE_CONTEXT,
} from '../../util/constants/typeNameConstants';

import system from '@rebass/components';

const Item = system({
  extend: Flex,
  is: 'div',
  padding: 3,
  border: 1,
  props: (props) => ({
    color: props.color,
  }),
});

const MODIFY_PRE_OPTIONS = gql`
  mutation ModifyPreOptions($currentArray: [String], $arrayValue: PlaygroundArrayValue, $type: String, $arrayType: String) {
    modifyPreOptions(arrayValue: $arrayValue, currentArray: $currentArray, type: $type, arrayType: $arrayType) @client
  }
`

class KeySet extends React.Component<{ currentArray: string[], arrayType: string, arrayValue: { selected: boolean, value: string }, type: string }, {}> {

  public render() {
    const { currentArray, arrayValue, type, arrayType } = this.props;
    
    return (
      <Mutation mutation={MODIFY_PRE_OPTIONS}>
        {modifyPreOptions => {
          return (
            <FlexColumn css={{ display: 'inline-block' }}>
              <Item 
                onClick={() => modifyPreOptions({ variables: { arrayValue: arrayValue, currentArray, type, arrayType } })} 
                css={{ display: 'inline-block' }}
                color={arrayValue.selected ? 'red' : null}>{arrayValue.value}</Item>
            </FlexColumn>  
          )      
        }}
      </Mutation>
    )
  }

  public getTypename = (type) => {
    switch(type) {
      case 'preOptions': return __TYPENAME_PRE_OPTIONS;
      case 'preModifiers': return __TYPENAME_PRE_MODIFIERS;
      case 'preSentenceContext': return __TYPENAME_PRE_SENTENCE_CONTEXT;
    }
    throw Error('eh')
  }
};

class OptionsSet extends React.Component<{ preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext }, {}> {

  public render() {
    const {
      preOptions,
      preModifiers,
      preSentenceContext,
    } = this.props;

    delete preOptions.__typename;
    delete preModifiers.__typename;
    delete preSentenceContext.__typename;

    const optionsKeys = ['politenessArray'];
    // const optionsKeys = Object.keys(preOptions);
    // const modifiersKeys = Object.keys(preModifiers);
    // const sentenceContextKeys = Object.keys(preSentenceContext);

    return (
      <FlexColumn>
        {optionsKeys.map((optionsField, index) => {

          const currentArrayOfValues = preOptions[optionsField]; // ['a', 'b']
          const completeArrayOfValues = selectOptionsArray(optionsField) // ['a', 'b']

          const selectedArray = completeArrayOfValues.map(completeValue => {
            if (currentArrayOfValues.includes(completeValue)) {
              return { selected: true, value: completeValue }
            } else {
              return { selected: false, value: completeValue }
            }
          });

          return (
            <FlexColumn key={`${index}${optionsField}`}>
              <Heading>{optionsField}</Heading>
              {selectedArray.map((selectedOptionsField, index) => (
                <KeySet
                  key={`${index}`}
                  type='preOptions'
                  arrayType={optionsField}
                  arrayValue={selectedOptionsField}
                  currentArray={preOptions[optionsField]}
                />
              ))}
            </FlexColumn>
          )
        })}

        {/* {optionsKeys.map((optionsField, index) => (
          <FlexColumn key={`${index}${optionsField}`}>
            <Heading>{optionsField}</Heading>
            {preOptions[optionsField].map((selectedOptionsField, index) => (
              <KeySet
                key={`${index}${selectedOptionsField}`}
                client={client}
                type='preOptions'
                arrayType={optionsField}
                setValue={selectedOptionsField}
                valuesArray={selectOptionsArray(optionsField)}
                currentArray={preOptions[optionsField]}
              />
            ))}
          </FlexColumn>
        ))} */}
        {/* {modifiersKeys.map((modifiersField, index) => (
          <FlexColumn key={index}>
            <Heading>{modifiersField}</Heading>
            {preModifiers[modifiersField].map((selectedModifiersField, index) => (
              <KeySet
                key={index}
                client={client}
                type='preModifiers'
                arrayType={modifiersField}
                setValue={selectedModifiersField}
                valuesArray={selectModifiersArray(modifiersField)}
                currentArray={preModifiers[modifiersField]}
              />
            ))}
          </FlexColumn>
        ))}
        {sentenceContextKeys.map((sentenceContextField, index) => (
          <FlexColumn key={index}>
            <Heading>{sentenceContextField}</Heading>
            {preSentenceContext[sentenceContextField].map((selectedSentenceContextField, index) => (
              <KeySet
                key={index}
                client={client}
                type='preSentenceContext'
                arrayType={sentenceContextField}
                setValue={selectedSentenceContextField}
                valuesArray={selectSentenceContextArray(sentenceContextField)}
                currentArray={preSentenceContext[sentenceContextField]}
              />
            ))}
          </FlexColumn>
        ))} */}
      </FlexColumn>
    )
  }
}

class Playground extends React.Component<{ preOptions: Util.PreOptions, preModifiers: Util.PreModifiers, preSentenceContext: Util.PreSentenceContext, client: any }, {}> {
  public render() {
    const {
      // client,
      preOptions,
      preModifiers,
      preSentenceContext,
    } = this.props;
    return (
      <PageWrapper>
        <Helmet title={ROUTE_TITLE.PLAYGROUND} description={ROUTE_DESCRIPTION.PLAYGROUND}/>
        <PageHeading>{ROUTE_TITLE.PLAYGROUND}</PageHeading>

        <FlexColumn>
          <OptionsSet
            preOptions={preOptions}
            preModifiers={preModifiers}
            preSentenceContext={preSentenceContext}
          />
        </FlexColumn>

      </PageWrapper> 
    );
  };
};

export default Playground;



const selectOptionsArray = (optionsField) => {
  switch(optionsField) {
    case 'variationArray': return variationArray;
    case 'questionArray': return questionArray;
    case 'polarityArray': return polarityArray;
    case 'tenseArray': return tenseArray;
    case 'politenessArray': return politenessArray;
    case 'genderArray': return genderArray;
    case 'sentenceEndingArray': return sentenceEndingArray;
    case 'themesArray': return themesArray;
    // case '__typename': return null; 
  }  
  throw new Error(`${optionsField} doesn't exist`);
}


// const selectOptionsArrayTypename = (optionsField) => {
//   switch(optionsField) {
//     case 'variationArray': return '__TYPENAME_VARIATION_ARRAY';
//     case 'questionArray': return '__TYPENAME_QUESTION_ARRAY';
//     case 'polarityArray': return '__TYPENAME_POLARITY_ARRAY';
//     case 'tenseArray': return '__TYPENAME_TENSE_ARRAY';
//     case 'politenessArray': return '__TYPENAME_POLITENESS_ARRAY';
//     case 'genderArray': return '__TYPENAME_GENDER_ARRAY';
//     case 'sentenceEndingArray': return '__TYPENAME_SENTENCEENDING_ARRAY';
//     case 'themesArray': return '__TYPENAME_THEMES_ARRAY';
//     // case '__typename': return null; 
//   }  
//   throw new Error(`${optionsField} doesn't exist`);
// }

// const selectModifiersArray = (modifiersField) => {
//   switch(modifiersField) {
//     case 'topicNoArray': return topicNoArray;
//     case 'subjectNoArray': return subjectNoArray;
//     case 'topicAdjectiveArray': return topicAdjectiveArray;
//     case 'topicAdverbArray': return topicAdverbArray;
//     case 'subjectAdjectiveArray': return subjectAdjectiveArray;
//     case 'subjectAdverbArray': return subjectAdverbArray;
//     // case '__typename': return null; 
//   }  
//   throw new Error(`${modifiersField} doesn't exist`);
// }

// const selectSentenceContextArray = (sentenceContextField) => {
//   switch(sentenceContextField) {
//     case 'topicIntentArray': return contextIntentArray;
//     case 'topicProximityArray': return contextProximityArray;
//     case 'topicDestinationArray': return contextTopicDestinationArray;
//     case 'eventDirectionArray': return contextDirectionArray;
//     case 'eventOccuranceArray': return contextEventOccuranceArray;
//     case 'eventDurationArray': return contextDurationArray;
//     case 'eventPOVArray': return contextEventPOVArray;
//     case 'subjectConnectionArray': return contextSubjectConnectionArray;
//     case 'subjectRoleArray': return contextSubjectRoleArray;
//     case 'subjectQuantityArray': return contextSubjectQuantityArray;
//     case '__typename': return null;
//   }  
//   throw new Error(`${sentenceContextField} doesn't exist`);
// }

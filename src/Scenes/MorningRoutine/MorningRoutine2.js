import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

import MrContainer from './Components/MrContainer';
import FormStepCircles from '../Dash/Components/FormStepCircles';
import TextInput from '../Dash/Components/TextInput';

import useMultiStage from '../../Hooks/useMultiStage';
import { JournalContext } from '../../lib/Context/JournalContext';
import { updateField } from '../../lib/Actions/JournalActions';
import StarRater from '../Journal/StarRater';
import PanelButton from '../Dash/Components/PanelButton';

const Header = styled.div`
  grid-row: 1 / span 1;
  grid-column: 2 /-2;
  display: flex;
  align-items: center;
  padding: 0 1em;
`;
const Main = styled.div`
  grid-row: 2 / span 1;
  grid-column: 2 /-2;
  position: relative;
  overflow: hidden;
`;
const Footer = styled.div`
  grid-row: 3 / span 1;
  grid-column: 2 /-2;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 1em;
`;

const StepWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

// transition logic
function getTransitionConfig(step, direction) {
  console.log('getting transition', step, direction);
  if (direction === 'back') {
    return {
      from: { transform: 'translateX(-100%)', opacity: 0 },
      enter: { transform: 'translateX(0)', opacity: 1 },
      leave: { transform: 'translateX(100%)', opacity: 0 },
    };
  }
  if (direction === 'start') {
    return {
      from: { transform: 'translateX(0)', opacity: 0 },
      enter: { transform: 'translateX(0)', opacity: 1 },
      leave: { transform: 'translateX(100%)', opacity: 0 },
    };
  }
  console.log('fwd');
  return {
    from: { transform: 'translateX(100%)', opacity: 0 },
    enter: { transform: 'translateX(0)', opacity: 1 },
    leave: { transform: 'translateX(-100%)', opacity: 0 },
  };
}

function Step0({ style, controller }) {
  return (
    <StepWrapper style={style}>
      <StarRater
        title="How Was Yesterday?"
        value={controller.formValues[0].dayRating}
        changeFunc={(starNumber) =>
          controller.setValue(0, 'dayRating', starNumber)
        }
      />
      <StarRater
        title="How Was Your Sleep?"
        value={controller.formValues[0].sleepRating}
        changeFunc={(starNumber) =>
          controller.setValue(0, 'sleepRating', starNumber)
        }
      />
    </StepWrapper>
  );
}

function Step1({ style, controller }) {
  const inputFocusRef = useRef(null);
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      inputFocusRef.current.focus();
    }, 450);
  }, []);
  return (
    <StepWrapper style={style}>
      <TextInput
        fwdRef={inputFocusRef}
        name="gratitude1"
        placeholder="Reason to be grateful #1"
        value={controller.formValues[1].gratitude1}
        onChange={(e) => controller.setValue(1, 'gratitude1', e.target.value)}
      />
      <TextInput
        name="gratitude2"
        placeholder="Reason to be grateful #2"
        value={controller.formValues[1].gratitude2}
        onChange={(e) => controller.setValue(1, 'gratitude2', e.target.value)}
      />
      <TextInput
        name="gratitude3"
        placeholder="Reason to be grateful #3"
        value={controller.formValues[1].gratitude3}
        onChange={(e) => controller.setValue(1, 'gratitude3', e.target.value)}
      />
    </StepWrapper>
  );
}

function Step2({ style, controller }) {
  const inputFocusRef = useRef(null);
  // set focus on text element
  useEffect(() => {
    // hack to delay set focus untill animation has completed
    setTimeout(() => {
      inputFocusRef.current.focus();
    }, 450);
  }, []);
  return (
    <StepWrapper style={style}>
      <TextInput
        fwdRef={inputFocusRef}
        name="goal"
        placeholder="Whats your key goal for today?"
        value={controller.formValues[2].goal}
        onChange={(e) => controller.setValue(2, 'goal', e.target.value)}
      />
    </StepWrapper>
  );
}

const AnimatedStep0 = animated(Step0);
const AnimatedStep1 = animated(Step1);
const AnimatedStep2 = animated(Step2);

function MorningRoutine2() {
  const steps = [
    { dayRating: null, sleepRating: null },
    { gratitude1: '', gratitude2: '', gratitude3: '' },
    { goal: '' },
  ];

  const controller = useMultiStage(steps);

  // animated steps

  // set up transition
  const transitions = useTransition(
    controller.stepIndex,
    null,
    getTransitionConfig(controller.stepIndex, controller.direction)
  );

  // transfer data from multiform state to Journal reducer on submit
  const { state, dispatch } = useContext(JournalContext);
  function updateJournal() {
    controller.formValues.forEach((step) => {
      Object.entries(step).forEach(([key, value]) => {
        dispatch(updateField('morning', key, value));
      });
    });
  }

  console.log(transitions);

  return (
    <MrContainer className="page">
      <Header>
        <FormStepCircles
          currentStep={controller.stepIndex + 1}
          totalSteps={controller.totalSteps}
        />
      </Header>
      <Main>
        {transitions.map(({ item, key, props }) => {
          switch (item) {
            case 0:
              return (
                <AnimatedStep0
                  style={props}
                  key={key}
                  controller={controller}
                />
              );
            case 1:
              return (
                <AnimatedStep1
                  style={props}
                  key={key}
                  controller={controller}
                />
              );
            case 2:
              return (
                <AnimatedStep2
                  style={props}
                  key={key}
                  controller={controller}
                />
              );
            default:
              return <div key={key} />;
          }
        })}
      </Main>
      <Footer>
        <PanelButton
          hide={controller.stepIndex === 0}
          onClick={controller.navigation.back}
        >
          Back
        </PanelButton>
        {controller.stepsCompleted[controller.stepIndex] && (
          <PanelButton
            onClick={
              controller.stepIndex === 2
                ? updateJournal
                : controller.navigation.next
            }
          >
            {controller.stepIndex === 2 ? 'Create Finish' : 'Next'}
          </PanelButton>
        )}
      </Footer>
    </MrContainer>
  );
}

export default MorningRoutine2;

import React, { useContext } from 'react';

import { MorningRoutineContext } from '../../lib/Context/MorningRoutineContext';

import { MrHeader, MrMainContent, MrFooter, MrContainer } from './Components';
import {
  submitRate,
  submitGratitude,
  submitGoal,
} from '../../lib/Actions/MorningRoutineActions';

function MorningRoutine() {
  const { state } = useContext(MorningRoutineContext);

  // ==============================

  // Footer buttons configs
  const buttonProp = {
    rate: {
      displayBackButton: false,
      nextButtonText: 'next',
      isEnabled: state.data.ratings.day && state.data.ratings.sleep,
      fwdButtonAction: submitRate,
    },
    gratitude: {
      displayBackButton: true,
      nextButtonText: 'next',
      isEnabled:
        state.data.gratitude[1] &&
        state.data.gratitude[2] &&
        state.data.gratitude[3],
      fwdButtonAction: submitGratitude,
    },
    goal: {
      displayBackButton: true,
      nextButtonText: 'finish',
      isEnabled: state.data.goal.text,
      fwdButtonAction: submitGoal,
    },
    complete: {
      displayBackButton: true,
      nextButtonText: 'finish',
      isEnabled: state.data.goal.text,
      fwdButtonAction: submitGoal,
    },
  };
  console.log('1', buttonProp);
  console.log('2', buttonProp['rate']);
  console.log('3', state);
  return (
    <MrContainer className="page">
      <MrHeader />
      <MrMainContent direction={state.direction} />
      <MrFooter buttonProp={buttonProp[state.step]} />
    </MrContainer>
  );
}

export default MorningRoutine;

import {
  submitRate,
  submitGratitude,
  submitGoal,
} from '../../../lib/Actions/MorningRoutineActions';

export default function getButtonProps(state) {
  const buttonProp = {
    rate: {
      displayBackButton: false,
      nextButtonText: 'next',
      isEnabled: state.data.ratings.day > 0 && state.data.ratings.sleep > 0,
      fwdButtonAction: submitRate,
    },
    gratitude: {
      displayBackButton: true,
      nextButtonText: 'next',
      isEnabled:
        state.data.gratitude[1] &&
        state.data.gratitude[2] &&
        state.data.gratitude[3]),
      fwdButtonAction: submitGratitude,
    },
    goal: {
      displayBackButton: true,
      nextButtonText: 'finish',
      isEnabled: !!state.data.goal.text,
      fwdButtonAction: submitGoal,
    },
    complete: {
      displayBackButton: true,
      nextButtonText: 'finish',
      isEnabled: !!state.data.goal.text,
      fwdButtonAction: submitGoal,
    },
  
  };
  return buttonProp[state.step];
}

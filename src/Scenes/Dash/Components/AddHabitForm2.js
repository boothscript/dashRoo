import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useMultiStage from '../../../Hooks/useMultiStage';
import { HabitContext } from '../../../lib/Context/HabitContext';
import { addNewHabit } from '../../../lib/Actions/HabitActions';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import WeekCheck from './WeekCheck';
import Button from './Button';
import FormStepCircles from './FormStepCircles';

const Div = styled.div`
  grid-column: 1 / span 9;
  grid-row: 2 / span 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Header = styled.div``;
const Main = styled.div``;
const Footer = styled.div``;

const Label = styled.label`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
  margin-bottom: 1em;
`;

function AddHabitForm2({ closeFunc }) {
  const { dispatch } = useContext(HabitContext);

  const controller = useMultiStage([
    { habitTitle: '' },
    { weekArr: [false, false, false, false, false, false, false] },
    { targetNumber: '1', targetPeriod: 'week' },
  ]);

  function submitForm() {
    const payload = {
      title: controller.formValues[0].habitTitle,
      weekArr: controller.formValues[1].weekArr,
      targetNumber: Number(controller.formValues[2].targetNumber),
      targetPeriod: Number(controller.formValues[2].targetPeriod),
    };
    dispatch(addNewHabit(payload));
    closeFunc();
  }

  return (
    <Div>
      <Header>
        <FormStepCircles
          currentStep={controller.stepIndex + 1}
          totalSteps={controller.totalSteps}
        />
      </Header>
      <Main>
        {/* step 1 */}
        {controller.stepIndex === 0 && (
          <>
            <Label htmlFor="habitTitle">Habit Title</Label>
            <TextInput
              name="habitTitle"
              value={controller.formValues[0].habitTitle}
              onChange={(e) =>
                controller.setValue(
                  controller.stepIndex,
                  e.target.name,
                  e.target.value
                )
              }
              placeholder="Exercise"
            />
          </>
        )}

        {/* step 2 */}
        {controller.stepIndex === 1 && (
          <Label htmlFor="weekArr">
            On what days is it possible for you to complete the habit?
            <WeekCheck
              weekArray={controller.formValues[1].weekArr}
              updateWeekArray={(newArr) =>
                controller.setValue(controller.stepIndex, 'weekArr', newArr)
              }
            />
          </Label>
        )}

        {/* step 3 */}
        {controller.stepIndex === 2 && (
          <>
            <Label htmlFor="targetNumber">
              Set your target
              <Dropdown
                valueArray={['1', '2', '3', '4', '5', '6', '7']}
                stateValue={controller.formValues[2].targetNumber}
                updateValue={(newValue) =>
                  controller.setValue(
                    controller.stepIndex,
                    'targetNumber',
                    newValue
                  )
                }
                placeholder="How many times?"
              />
            </Label>
            <Label htmlFor="targetPeriod">
              per
              <Dropdown
                valueArray={['week', 'fortnight', 'month']}
                stateValue={controller.formValues[2].targetPeriod}
                updateValue={(newValue) =>
                  controller.setValue(
                    controller.stepIndex,
                    'targetPeriod',
                    newValue
                  )
                }
                placeholder="period"
              />
            </Label>
          </>
        )}
      </Main>
      <Footer>
        <Button small onClick={controller.navigation.back}>
          Back
        </Button>
        <Button
          small
          onClick={
            controller.stepIndex === 2 ? submitForm : controller.navigation.next
          }
        >
          {controller.stepIndex === 2 ? 'Create Habbit' : 'Next'}
        </Button>
      </Footer>
    </Div>
  );
}

export default AddHabitForm2;

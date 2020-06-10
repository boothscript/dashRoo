import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useMultiStage from '../../../Hooks/useMultiStage';
import { HabitContext } from '../../../lib/Context/HabitContext';
import { addNewHabit } from '../../../lib/Actions/HabitActions';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import WeekCheck from './WeekCheck';
import PanelButton from './PanelButton';
import FormStepCircles from './FormStepCircles';

const Div = styled.div`
  grid-column: 1 / span 9;
  grid-row: 2 / span 8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 0;
`;
const Header = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Main = styled.div``;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Label = styled.label`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
  margin-bottom: 1em;
  font-size: 1.25rem;
  display: block;
`;

const DropdownWrapper = styled.div`
  display: flex;
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
          <>
            <Label htmlFor="weekArr">
              On what days is it possible for you to complete the habit?
            </Label>
            <WeekCheck
              name="weekArr"
              weekArray={controller.formValues[1].weekArr}
              updateWeekArray={(newArr) =>
                controller.setValue(controller.stepIndex, 'weekArr', newArr)
              }
            />
          </>
        )}

        {/* step 3 */}
        {controller.stepIndex === 2 && (
          <DropdownWrapper>
            <div style={{ marginRight: '4em' }}>
              <Label htmlFor="targetNumber">Set your target: </Label>
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
            </div>
            <div>
              <Label htmlFor="targetPeriod">Per period:</Label>
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
            </div>
          </DropdownWrapper>
        )}
      </Main>
      <Footer>
        <PanelButton
          hide={controller.stepIndex === 0}
          onClick={controller.navigation.back}
        >
          Back
        </PanelButton>
        <PanelButton
          onClick={
            controller.stepIndex === 2 ? submitForm : controller.navigation.next
          }
        >
          {controller.stepIndex === 2 ? 'Create Habit' : 'Next'}
        </PanelButton>
      </Footer>
    </Div>
  );
}

export default AddHabitForm2;

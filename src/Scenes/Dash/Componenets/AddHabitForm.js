import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { HabitContext } from '../../../lib/Context/HabitContext';
import { addNewHabit } from '../../../lib/Actions/HabitActions';
import Dropdown from './Dropdown';
import TextInput from './TextInput';
import WeekCheck from './WeekCheck';

const Div = styled.div`
  grid-column: 1 / span 9;
  grid-row: 2 / span 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Label = styled.label`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
  margin-bottom: 1em;
`;

const Fieldset = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
`;

function AddHabitForm({ closeFunc }) {
  const { state, dispatch } = useContext(HabitContext);

  const [dropValue, setDropValue] = useState('1');
  const [dropValue2, setDropValue2] = useState('');
  const [weekArr, setWeekArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [habitTitle, setHabitTitle] = useState('');

  function submitForm() {
    const payload = {
      title: habitTitle,
      weekArr,
      targetNumber: Number(dropValue),
      targetFrequency: dropValue2,
    };
    const newHabitObj = dispatch(addNewHabit(payload));

    closeFunc();
  }

  return (
    <>
      <Div>
        <Fieldset>
          <Label htmlFor="title">Habit Title</Label>
          <TextInput
            name="title"
            value={habitTitle}
            onChange={(e) => setHabitTitle(e.target.value)}
            placeholder="Habit Name"
            small
          />
        </Fieldset>
        <Fieldset>
          <Label>Select possible completion days</Label>
          <WeekCheck weekArray={weekArr} updateWeekArray={setWeekArr} />
        </Fieldset>
        <Fieldset>
          <Label>Target completions</Label>
          <Wrapper>
            <Dropdown
              valueArray={['1', '2', '3', '4', '5', '6', '7']}
              stateValue={dropValue}
              updateValue={setDropValue}
              placeholder="How many times?"
            />

            <Dropdown
              valueArray={['week', 'fortnight', 'month']}
              stateValue={dropValue2}
              updateValue={setDropValue2}
              placeholder="Over what time period?"
            />
          </Wrapper>
        </Fieldset>
        <button type="submit" onClick={submitForm}>
          Add
        </button>
      </Div>
    </>
  );
}

export default AddHabitForm;

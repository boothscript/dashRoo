import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import TextInput from './TextInput';
import Dropdown from './Dropdown';
import WeekCheck from './WeekCheck';
import WeekCheckAnimated from './weekCheckAnimated';
import PanelGrid from './PanelGrid';
import HabitsRepo from '../../../lib/Storage/HabitsRepo';

import { HabitContext } from '../../../lib/Context/HabitContext';
import { updateHabitData } from '../../../lib/Actions/HabitActions';

const Div = styled.div`
  grid-column: 1 / span 9;
  grid-row: 2 / span 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = styled.div`
  grid-column: 1 / span 9;
  grid-row: 1 / span 1;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.white30};
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
const H3 = styled.h3`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
`;

function NewHabitForm(closeFunc) {
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
    HabitsRepo.createHabit({ ...payload });
  }

  return (
    <>
      <Header>
        <H3>Add Habit</H3>
      </Header>
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

const HabitWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  color: ${(props) => props.theme.white90};
  font-family: ${(props) => props.theme.font};
  align-items: center;
`;
const HabitTitle = styled.p`
  width: 55%;
`;

function Habit(habitObj, dispatch) {
  const weekNumber = moment().week();
  const weekArr = habitObj.data.find((week) => week.weekNumber === weekNumber);
  console.log({ weekArr });
  return (
    <HabitWrapper>
      <HabitTitle>{habitObj.title}</HabitTitle>
      <WeekCheckAnimated
        weekArray={weekArr.completed}
        updateWeekArray={(newArr) =>
          dispatch(updateHabitData(habitObj.id, weekNumber, newArr))
        }
      />
    </HabitWrapper>
  );
}

function HabitTracker() {
  const [showAdd, setShowAdd] = useState(false);
  const { state, dispatch } = useContext(HabitContext);
  console.log({ state });
  const habitComponents = state.map((habit) => {
    return Habit(habit, dispatch);
  });
  return (
    <PanelGrid row="3 / span 7" column="1 / span 4">
      {showAdd && <NewHabitForm />}
      {habitComponents}
      <button
        type="button"
        onClick={() => setShowAdd((prevState) => !prevState)}
      >
        new
      </button>
    </PanelGrid>
  );
}

export default HabitTracker;

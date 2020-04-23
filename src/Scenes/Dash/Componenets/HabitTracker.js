import React, { useState } from 'react';
import styled from 'styled-components';
import faker from 'faker';
import TextInput from './TextInput';
import Dropdown from './Dropdown';
import WeekCheck from './WeekCheck';
import PanelGrid from './PanelGrid';

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

function NewHabitForm() {
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
  const [text, setText] = useState('');
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
            value={text}
            onChange={(e) => setText(e.target.value)}
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
        <button type="submit">Add</button>
      </Div>
    </>
  );
}

function HabitTracker() {
  return (
    <PanelGrid row="3 / span 7" column="1 / span 4">
      <NewHabitForm />
    </PanelGrid>
  );
}

export default HabitTracker;

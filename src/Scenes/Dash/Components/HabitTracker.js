import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import Habit from './Habit';
import PanelGrid from './PanelGrid';
import AddHabitForm from './AddHabitForm';
import AddHabitForm2 from './AddHabitForm2';
import Header from './Header';

import { HabitContext } from '../../../lib/Context/HabitContext';

const Button = styled.button`
  grid-row: 9;
  grid-column: 1/-1;
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
  align-self: center;
  margin-left: auto;
  background: ${(props) => props.theme.panel && props.theme.panel};
  border: 1px solid;
  font-size: 1.075rem;
  border-color: ${(props) => props.theme.white30};
  border-radius: 6px;
  font-family: ${(props) => props.theme.font && props.theme.font};
  font-weight: 200;

  color: ${(props) => props.theme.white30};
  padding: 0.25em 1em;
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'default')};
  &:focus,
  &:hover {
    background: ${(props) => props.theme.white90 && props.theme.white90};
    color: ${(props) => props.theme.panel && props.theme.panel};
  }
`;

const Div = styled.div`
  grid-row: 2/-2;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`;

function HabitTracker() {
  const [showAdd, setShowAdd] = useState(false);
  const { state, dispatch } = useContext(HabitContext);

  const habitComponents = state.map((habit) => {
    return Habit(habit, dispatch);
  });
  return (
    <PanelGrid row="3 / span 7" column="1 / span 4">
      {showAdd ? (
        <>
          <Header title="Create New Habit" />
          <AddHabitForm2 closeFunc={() => setShowAdd(false)} />
        </>
      ) : (
        <>
          <Header title="Habit Tracker" />
          <Div>{habitComponents}</Div>
          <Button
            type="button"
            onClick={() => setShowAdd((prevState) => !prevState)}
          >
            Add New Habit
          </Button>
        </>
      )}
    </PanelGrid>
  );
}

export default HabitTracker;

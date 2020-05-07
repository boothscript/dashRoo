import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import Dropdown from './Dropdown';

import Habit from './Habit';
import PanelGrid from './PanelGrid';
import AddHabitForm from './AddHabitForm';
import { HabitContext } from '../../../lib/Context/HabitContext';
import { updateHabitData } from '../../../lib/Actions/HabitActions';

const Header = styled.div`
  grid-column: 1 / span 9;
  grid-row: 1 / span 1;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid ${(props) => props.theme.white30};
`;

const H3 = styled.h3`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white90};
`;

function HabitTracker() {
  const [showAdd, setShowAdd] = useState(false);
  const { state, dispatch } = useContext(HabitContext);
  console.log({ state });
  const habitComponents = state.map((habit) => {
    console.log('runnning habit components factory');
    return Habit(habit, dispatch);
  });
  return (
    <PanelGrid row="3 / span 7" column="1 / span 4">
      {showAdd ? (
        <AddHabitForm closeFunc={() => setShowAdd(false)} />
      ) : (
        habitComponents
      )}
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

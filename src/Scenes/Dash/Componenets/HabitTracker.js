import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import Dropdown from './Dropdown';

import WeekCheckAnimated from './weekCheckAnimated';
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

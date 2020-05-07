import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { updateHabitData } from '../../../lib/Actions/HabitActions';
import WeekCheckAnimated from './weekCheckAnimated';

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

export default Habit;

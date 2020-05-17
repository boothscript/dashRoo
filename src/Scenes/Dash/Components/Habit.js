import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { updateHabitData } from '../../../lib/Actions/HabitActions';
import WeekCheck from './WeekCheck';
import ProgressBar from './ProgressBar';

const HabitWrapper = styled.div`
  height: 50px;

  margin: 15px 0;
  display: flex;
  color: ${(props) => props.theme.white90};
  font-family: ${(props) => props.theme.font};
  align-items: center;
  border-radius: 6px;
  border-left: 3px solid ${(props) => props.color};
  padding-left: 1em;
`;
const HabitTitle = styled.p`
  width: 55%;
`;
const ProgressWrapper = styled.div`
  grid-column: 1 / -1;
`;

const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Habit({ habitObj, dispatch }) {
  const weekNumber = moment().week();
  const weekArr = habitObj.data.find((week) => week.weekNumber === weekNumber);

  function calculateProgress() {
    const numberCompleted = weekArr.completed.filter((day) => day).length;

    return (numberCompleted / habitObj.targetNumber) * 100;
  }

  const progressValue = calculateProgress();
  return (
    <>
      <HabitWrapper color={habitObj.color}>
        <HabitTitle>{habitObj.title}</HabitTitle>
        <Div>
          <WeekCheck
            availability={habitObj.weekArr}
            weekArray={weekArr.completed}
            updateWeekArray={(newArr) =>
              dispatch(updateHabitData(habitObj.id, weekNumber, newArr))
            }
            color={habitObj.color}
            animated
          />
          <ProgressWrapper>
            <ProgressBar
              color1="rgba(256,256,256,0.3)"
              color2={habitObj.color}
              value={progressValue}
            />
          </ProgressWrapper>
        </Div>
      </HabitWrapper>
    </>
  );
}

export default Habit;

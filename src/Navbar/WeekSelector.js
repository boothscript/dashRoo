import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { WeekSelectorContext } from '../lib/Context/WeekSelectionContext';
import {
  changeSelectedDay,
  goBackOneWeek,
  goForwardOneWeek,
} from '../lib/Actions/WeekSelectorActions';
import { enumerateDates, monthFullNames, createWeekArray } from '../Utils/date';
const Div = styled.div`
  grid-column: 5 / span 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;
const Month = styled.p`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white30};
  text-align: center;
  margin: 0 0 0;

  text-transform: uppercase;
  letter-spacing: 1.6px;
`;
const DayNumberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DayNumberButton = styled.div`
  font-family: ${(props) => props.theme.font};
  height: 19px;
  width: 19px;
  background: ${(props) =>
    props.selected ? props.theme.white90 : props.theme.white10};
  border: none;
  color: ${(props) =>
    props.selected ? props.theme.darkest : props.theme.white90};
  border-radius: 2px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0px;
`;

const DayNumber = styled.p`
  font-size: 1rem;
  vertical-align: center;
`;
const LeftArrow = styled.button`
  height: 20px;
  width: 20px;
  background: inherit;
  border: none;
  background: url('/img/arrow-left.svg');
  background-size: contain;
  background-position: center;
`;
const RightArrow = styled.button`
  height: 20px;
  width: 20px;
  background: inherit;
  border: none;
  background: url('/img/arrow-right.svg');
  background-size: contain;
  background-position: center;
`;

function WeekSelector() {
  const { state, dispatch } = useContext(WeekSelectorContext);

  const { selectedDate } = state;
  console.log({ selectedDate });

  const dateArray = createWeekArray(selectedDate);

  function handleDateClick(date) {
    dispatch(changeSelectedDay(date));
  }

  function handleBackClick() {
    dispatch(goBackOneWeek());
  }

  function handleForwardClick() {
    dispatch(goForwardOneWeek());
  }

  console.log('second', { selectedDate });
  return (
    <Div>
      <DayNumberWrapper>
        <LeftArrow onClick={handleBackClick} />
        <Month>{monthFullNames[selectedDate.month()]}</Month>
        {dateArray.map((date) => (
          <DayNumberButton
            selected={selectedDate.isSame(date, 'day')}
            onClick={() => handleDateClick(date)}
          >
            <DayNumber>{moment(date).date()}</DayNumber>
          </DayNumberButton>
        ))}
        <RightArrow onClick={handleForwardClick} />
      </DayNumberWrapper>
    </Div>
  );
}

export default WeekSelector;

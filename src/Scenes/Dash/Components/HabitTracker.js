import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import Habit from './Habit';
import PanelGrid from './PanelGrid';
import AddHabitForm from './AddHabitForm';
import AddHabitForm2 from './AddHabitForm2';
import Header from './Header';
import PanelButton from './PanelButton';

import { HabitContext } from '../../../lib/Context/HabitContext';

const ButtonWrapper = styled.div`
  grid-row: 9;
  grid-column: 1/-1;
  display: flex;
  justify-content: flex-end;
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
    return <Habit habitObj={habit} dispatch={dispatch} key={habit.id} />;
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
          <ButtonWrapper>
            <PanelButton
              type="button"
              onClick={() => setShowAdd((prevState) => !prevState)}
            >
              Add New Habit
            </PanelButton>
          </ButtonWrapper>
        </>
      )}
    </PanelGrid>
  );
}

export default HabitTracker;

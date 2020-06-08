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

const PanelMenuButton = styled.button`
  background: ${(props) => props.theme.white10};
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  & > div {
    height: 20px;
    width: 20px;

    background: ${(props) =>
      props.icon === 'add'
        ? "url('/img/add-light.svg')"
        : "url('/img/exit-light.svg')"};
    background-position: center;
    background-repeat: no-repeat;
  }
  &:hover {
    background: ${(props) => props.theme.white90};
  }
  &:hover > div {
    background: ${(props) =>
      props.icon === 'add'
        ? "url('/img/add-dark.svg')"
        : "url('/img/exit-dark.svg')"};
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const AddIcon = styled.div`
  height: 20px;
  width: 20px;

  background-position: center;
  background-repeat: no-repeat;
`;

function HabitTracker() {
  const [showAdd, setShowAdd] = useState(false);
  const { state, dispatch } = useContext(HabitContext);

  const habitComponents = state.map((habit) => {
    return <Habit habitObj={habit} dispatch={dispatch} key={habit.id} />;
  });
  return (
    <PanelGrid row="4 / span 7" column="1 / span 4">
      <Header title="Habit Tracker">
        <PanelMenuButton
          type="button"
          onClick={() => setShowAdd((prevState) => !prevState)}
          icon={showAdd ? 'exit' : 'add'}
        >
          <AddIcon />
        </PanelMenuButton>
      </Header>
      {showAdd ? (
        <AddHabitForm2 closeFunc={() => setShowAdd(false)} />
      ) : (
        <Div>{habitComponents}</Div>
      )}
    </PanelGrid>
  );
}

export default HabitTracker;

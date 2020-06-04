import React, { useContext } from 'react';
import styled from 'styled-components';

import Timer from './Components/Timer';
import Stack from './Components/Stack';
import TodaysGoal from './Components/TodaysGoal';
import HabitTracker from './Components/HabitTracker';
import KPIChartsContainer from './Components/KPIChartsContainer';

const TimerStackWrapper = styled.div`
  grid-column: -3/-1;
  grid-row: 2 / span 6;
  background: ${(props) => props.theme.panel};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5em 0;
`;

function Dash() {
  return (
    <>
      <HabitTracker />
      <TodaysGoal />
      <KPIChartsContainer />
      <TimerStackWrapper>
        <Timer />
        <Stack />
      </TimerStackWrapper>
    </>
  );
}

export default Dash;

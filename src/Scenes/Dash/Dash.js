import React from 'react';
import styled from 'styled-components';

import Timer from './Components/Timer';
import Stack from './Components/Stack';
import TodaysGoal from './Components/TodaysGoal';
import HabitTracker from './Components/HabitTracker';
import Visualizer from './Components/Visualizer';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr) max(1200px) minmax(0, 1fr);
  background: #828282;
`;

const DashGrid = styled.div`
  grid-column: 2/-2;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: repeat(9, minmax(0, 1fr));
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 20px;
  padding: 10px;
  background: #0f1115;
  border-radius: 16px;
`;

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
      <Container>
        <DashGrid>
          <HabitTracker />
          <TodaysGoal />
          <Visualizer />
          <TimerStackWrapper>
            <Timer />
            <Stack />
          </TimerStackWrapper>
        </DashGrid>
      </Container>
    </>
  );
}

export default Dash;

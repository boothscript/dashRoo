import React from 'react';
import styled from 'styled-components';

import Timer from './Componenets/Timer';
import Stack from './Componenets/Stack';
import PlaceholderPanel from './Componenets/PlaceholderPanel';
import TodaysGoal from './Componenets/TodaysGoal';
import HabitTracker from './Componenets/HabitTracker';
import WeekCheck from './Componenets/WeekCheck';

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
  background: linear-gradient(90deg, #0f1115 67.5%, #171a21 67.6%);
  border-radius: 16px;
`;

function Dash() {
  return (
    <>
      <Container>
        <DashGrid>
          <HabitTracker />
          <TodaysGoal />
          <Timer />
          <Stack />
        </DashGrid>
      </Container>
    </>
  );
}

export default Dash;

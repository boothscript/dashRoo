import React from 'react';
import styled from 'styled-components';

import Timer from './Componenets/Timer';
import Stack from './Componenets/Stack';
import PlaceholderPanel from './Componenets/PlaceholderPanel';
import TodaysGoal from './Componenets/TodaysGoal';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(0, 1fr) max(1200px) minmax(0, 1fr);
  background: #828282;
`;

const DashGrid = styled.div`
  grid-column: 2/-2;
  grid-row: 1 / -1;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
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
          <PlaceholderPanel
            text="checklist"
            gridCol="1 / span 2"
            gridRow="2 / span 3"
          />
          <PlaceholderPanel
            text="notes"
            gridCol="1 / span 2"
            gridRow="5 / span 3"
          />
          <PlaceholderPanel
            text="feed"
            gridCol="1 / span 2"
            gridRow="8 / span 2"
          />
          <TodaysGoal />
          <PlaceholderPanel
            text="habit tracker"
            gridCol="3 / span 4"
            gridRow="3 / span 3"
          />
          <PlaceholderPanel
            text="visualiser"
            gridCol="3 / span 4"
            gridRow="6 / span 3"
          />
          <PlaceholderPanel
            text="kpis"
            gridCol="3 / span 4"
            gridRow="9 / span 1"
          />
          <Timer />
          <Stack />
        </DashGrid>
      </Container>
    </>
  );
}

export default Dash;

import React from "react";
import styled from "styled-components";

import { Timer, Stack } from "./Componenets";

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
  grid-gap: 10px;
  padding: 10px;
  background: linear-gradient(90deg, #0f1115 65.5%, #171a21 65.6%);
  border-radius: 16px;
`;

function Dash() {
  return (
    <>
      <Container>
        <DashGrid>
          <Timer />
          <Stack />
        </DashGrid>
      </Container>
    </>
  );
}

export default Dash;

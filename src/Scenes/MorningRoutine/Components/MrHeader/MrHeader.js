import React from "react";
import styled from "styled-components";

import MrWelcome from "./Components/MrWelcome";
import MrProgress from "./Components/MrProgress";

const Div = styled.div`
  grid-column: 2/-2;
  align-self: end;
  display: flex;
  justify-content: space-between;
`;

function MrHeader() {
  return (
    <Div>
      <MrWelcome>Good Morning, Steve</MrWelcome>
      <MrProgress />
    </Div>
  );
}

export default MrHeader;

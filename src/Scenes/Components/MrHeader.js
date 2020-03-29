import React from "react";
import styled from "styled-components";

import { MrWelcome } from "../../../Components/mr/elements";

const Div = styled.div`
  grid-column: 2/-2;
  align-self: end;
`;

function MrHeader() {
  return (
    <Div>
      <MrWelcome>Good Morning, Steve</MrWelcome>
    </Div>
  );
}

export default MrHeader;

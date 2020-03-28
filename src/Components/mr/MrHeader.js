import React from "react";
import styled from "styled-components";

import { MrWelcome } from "./elements/";

const Div = styled.div`
  align-self: flex-end;
`;

function MrHeader({ nextPage, buttonText, fieldsCompleted }) {
  return (
    <Div>
      <MrWelcome>Good Morning, Steve</MrWelcome>
    </Div>
  );
}

export default MrHeader;

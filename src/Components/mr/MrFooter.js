import React from "react";
import styled from "styled-components";

import { MrButton } from "./index";

const Div = styled.div`
  align-self: flex-start;
`;

function MrFooter({ nextPage, buttonText, fieldsCompleted }) {
  return (
    <Div>
      <MrButton disabled={!fieldsCompleted} text={buttonText} url={nextPage} />
    </Div>
  );
}

export default MrFooter;

import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  grid-column: 2/-2;
`;

function MrWrapper({ children }) {
  return <Div>{children}</Div>;
}

export default MrWrapper;

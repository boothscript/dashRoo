import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  grid-column: 2/-2;
`;

function MrMainContent({ children }) {
  return <Div>{children}</Div>;
}

export default MrMainContent;

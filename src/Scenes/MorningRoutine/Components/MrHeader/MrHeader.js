import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrProgress from "./Components/MrProgress";

const Div = styled.div`
  grid-column: 2/-2;
  align-self: end;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    align-self: stretch;
    justify-content: space-around;
  }
`;

const MrWelcome = styled.h1`
  font-family: ${(props) => props.theme.font && props.theme.font};
  font-weight: 800;
  color: ${(props) => props.theme.white90 && props.theme.white90};
  align-self: center;
`;

function MrHeader() {
  return (
    <Div>
      <MrWelcome>Good Morning, Steve</MrWelcome>
      <MrProgress />
    </Div>
  );
}

// MrHeader.propTypes = {
//   step: PropTypes.string.isRequired
// };

export default MrHeader;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrWelcome from "./Components/MrWelcome";
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

function MrHeader({ step }) {
  return (
    <Div>
      <MrWelcome>Good Morning, Steve</MrWelcome>
      <MrProgress step={step} />
    </Div>
  );
}

MrHeader.propTypes = {
  step: PropTypes.string.isRequired
};

export default MrHeader;

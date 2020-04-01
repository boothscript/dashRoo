import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrButton from "./Components/MrButton";

const Div = styled.div`
  grid-column: 2/-2;

  align-self: start;
  padding-top: 2em;
  display: flex;
  justify-content: space-between;
`;

function MrFooter({ buttonFunc, nextDisabled, buttonProps, submitRoutine }) {
  const { nextButtonText, displayBackButton } = buttonProps;

  return (
    <Div>
      <MrButton
        text="back"
        buttonFunc={buttonFunc}
        reverse={true}
        hide={!displayBackButton}
      />

      <MrButton
        disabled={nextDisabled}
        text={nextButtonText}
        buttonFunc={buttonFunc}
        reverse={false}
        submitRoutine={submitRoutine}
      />
    </Div>
  );
}

MrFooter.propTypes = {
  buttonFunc: PropTypes.func.isRequired,
  nextDisabled: PropTypes.bool.isRequired
};

export default MrFooter;

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrButton from "./Components/MrButton";
import { MorningRoutineContext } from "../../../../lib/Context/MorningRoutineContext";
import {
  GO_BACK,
  SUBMIT_GOAL,
} from "../../../../lib/Actions/MorningRoutineTypes";
const Div = styled.div`
  grid-column: 2/-2;

  align-self: start;
  padding-top: 2em;
  display: flex;
  justify-content: space-between;
`;

function MrFooter({ buttonProp }) {
  const { dispatch } = useContext(MorningRoutineContext);

  console.log("buttonprop", buttonProp);
  const {
    nextButtonText,
    displayBackButton,
    isEnabled,
    fwdButtonAction,
  } = buttonProp;

  const history = useHistory();
  function moveToDash() {
    history.push("/dash");
  }

  return (
    <Div>
      <MrButton
        text="back"
        buttonFunc={() => dispatch({ type: GO_BACK })}
        hide={!displayBackButton}
      />

      <MrButton
        disabled={!isEnabled}
        text={nextButtonText}
        buttonFunc={() => dispatch({ type: fwdButtonAction })}
      />
    </Div>
  );
}

// MrFooter.propTypes = {
//   buttonFunc: PropTypes.func.isRequired,
//   nextDisabled: PropTypes.bool.isRequired,
//   buttonProps: PropTypes.object.isRequired,
// };

export default MrFooter;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrButton from "./Components/MrButton";

const Div = styled.div`
  grid-column: 2/-2;
  align-self: start;
  justify-self: end;
`;

function MrFooter({ nextPage, buttonText, fieldsCompleted, submitFunc }) {
  return (
    <Div onClick={() => submitFunc()}>
      <MrButton disabled={!fieldsCompleted} text={buttonText} url={nextPage} />
    </Div>
  );
}

MrFooter.propTypes = {
  nextPage: PropTypes.string,
  buttonText: PropTypes.string,
  fieldsCompleted: PropTypes.bool
};

export default MrFooter;

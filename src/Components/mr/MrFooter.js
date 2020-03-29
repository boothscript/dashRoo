import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MrButton } from "./index";

const Div = styled.div`
  align-self: flex-start;
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

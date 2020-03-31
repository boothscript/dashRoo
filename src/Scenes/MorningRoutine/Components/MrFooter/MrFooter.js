import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MrButton from "./Components/MrButton";

const Div = styled.div`
  grid-column: 2/-2;
  align-self: start;
  justify-self: end;
  padding-top: 2em;
`;

function MrFooter({
  nextPage,
  buttonText,
  submitFunc,
  prevPage,
  options,
  fieldsCompleted
}) {
  return (
    <Div>
      {!options.renderBackButton ? (
        <MrButton text="back" url={prevPage} submitFunc={submitFunc} />
      ) : null}
      <MrButton
        disabled={!fieldsCompleted}
        text={buttonText}
        url={nextPage}
        submitFunc={submitFunc}
      />
    </Div>
  );
}

MrFooter.propTypes = {
  nextPage: PropTypes.string,
  buttonText: PropTypes.string,
  fieldsCompleted: PropTypes.bool
};

export default MrFooter;

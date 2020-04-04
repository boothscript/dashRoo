import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-self: center;
  opacity: 0.5;
  @media (max-width: 500px) {
    order: -1;
  }
`;
const ProgressCircle = styled.div`
  height: 30px;
  width: 30px;
  background-image: ${props =>
    props.active
      ? 'url("/img/progress-circle-fill.svg")'
      : 'url("/img/progress-circle-line.svg")'};
  background-size: contain;
  background-position: center;
  @media (max-width: 500px) {
    height: 24px;
    width: 24px;
  }
`;

function MrProgress({ step }) {
  return (
    <Wrapper>
      <ProgressCircle active={step === "rate"} />
      <ProgressCircle active={step === "gratitude"} />
      <ProgressCircle active={step === "goal"} />
    </Wrapper>
  );
}

MrProgress.propTypes = {
  step: PropTypes.string.isRequired
};

export default MrProgress;

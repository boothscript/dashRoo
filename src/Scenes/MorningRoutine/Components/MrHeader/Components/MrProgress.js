import React, { useContext } from "react";
import styled from "styled-components";

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
      <ProgressCircle active={step === "rate" ? true : false} />
      <ProgressCircle active={step === "gratitude" ? true : false} />
      <ProgressCircle active={step === "goal" ? true : false} />
    </Wrapper>
  );
}

export default MrProgress;

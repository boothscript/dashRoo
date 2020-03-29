import React, { useContext } from "react";
import styled from "styled-components";

import { MrContext } from "../../../Context/MorningRoutine";

const Wrapper = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-self: center;
  opacity: 0.5;
`;
const ProgressCircle = styled.div`
  height: 30px;
  width: 30px;
  background-image: ${props =>
    props.status === "active"
      ? 'url("/img/progress-circle-fill.svg")'
      : 'url("/img/progress-circle-line.svg")'};
  background-size: contain;
  background-position: center;
`;
function getProgressStatus(circleNumber, state) {
  const stateNumbers = {
    rate: 1,
    gratitude: 2,
    goal: 3
  };
  if (circleNumber === stateNumbers[state]) {
    return "active";
  } else {
    return null;
  }
}

function MrProgress() {
  const { mrState } = useContext(MrContext);
  return (
    <Wrapper>
      <ProgressCircle status={getProgressStatus(1, mrState)}></ProgressCircle>
      <ProgressCircle status={getProgressStatus(2, mrState)}></ProgressCircle>
      <ProgressCircle status={getProgressStatus(3, mrState)}></ProgressCircle>
    </Wrapper>
  );
}

export default MrProgress;
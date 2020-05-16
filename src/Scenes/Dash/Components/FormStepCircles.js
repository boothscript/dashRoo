import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  display: flex;
  width: 70px;
  justify-content: space-between;
  align-self: flex-start;
  opacity: 0.5;
`;
const ProgressCircle = styled.div`
  height: 15px;
  width: 15px;
  background-image: ${(props) =>
    props.active
      ? 'url("/img/progress-circle-fill.svg")'
      : 'url("/img/progress-circle-line.svg")'};
  background-size: contain;
  background-position: center;
`;

function FormStepCircles({ currentStep, totalSteps }) {
  const circles = [];
  for (let i = 1; i < totalSteps + 1; i += 1) {
    const active = currentStep === i;
    circles.push(<ProgressCircle key={i} active={active} />);
  }

  return <Wrapper>{circles}</Wrapper>;
}

export default FormStepCircles;

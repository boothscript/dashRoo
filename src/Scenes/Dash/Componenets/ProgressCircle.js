import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  position: absolute;
  transform: rotate(-90deg);
`;

const Div = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

function ProgressCircle({ children, startValue, currentTime, color }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const timePercentage = currentTime / startValue;
  console.log(startValue, currentTime);
  console.log(timePercentage);

  return (
    <>
      <Svg id="progressCircle" width="100%" height="100%" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={`${circumference * (1 - timePercentage)}`}
          style={{ transition: "stroke-dashoffset 500ms" }}
        />
      </Svg>
      <Div>{children}</Div>
    </>
  );
}

export default ProgressCircle;

import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

function createCSSGradient(color1, color2, value) {
  return `linear-gradient(90deg, ${color2} ${value}%, ${color1} ${
    value + 0.01
  }%)`;
}

const Bar = styled.div`
  width: 100%;
  height: 5px;
  background: ${(props) => props.gradient};
`;

function ProgressBar({ color1, color2, value }) {
  console.log({ color1, color2, value });
  return <Bar gradient={createCSSGradient(color1, color2, value)} />;
}

export default ProgressBar;

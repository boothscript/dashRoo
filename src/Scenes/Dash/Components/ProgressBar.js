import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  return <Bar gradient={createCSSGradient(color1, color2, value)} />;
}

ProgressBar.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProgressBar;

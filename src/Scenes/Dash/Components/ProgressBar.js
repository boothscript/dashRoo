import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BarContainer = styled.div`
  width: 100%;
  height: 5px;
  background: ${(props) => props.color};
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  height: 5px;
  background: ${(props) => props.color};
  transition: all ease-in-out 0.3s;
`;

function ProgressBar({ color1, color2, value }) {
  return (
    <BarContainer color={color1}>
      <Bar color={color2} value={value} />
    </BarContainer>
  );
}

ProgressBar.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default ProgressBar;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BarContainer = styled.div`
  width: 100%;
  height: 5px;
  background: ${(props) =>
    props.color ? props.color : props.theme.colors.white30};
`;

const Bar = styled.div`
  width: ${(props) => props.value}%;
  height: 5px;
  background: ${(props) => props.color};
  transition: all ease-in-out 0.3s;
`;

export default function ProgressBar({ backgroundColor, valueColor, value }) {
  // Limit value from 0 to 100
  const displayValue = Math.min(100, Math.max(0, value));

  return (
    <BarContainer color={backgroundColor}>
      <Bar color={valueColor} value={displayValue} />
    </BarContainer>
  );
}

ProgressBar.propTypes = {
  backgroundColor: PropTypes.string,
  valueColor: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

ProgressBar.default = {
  backgroundColor: undefined,
};

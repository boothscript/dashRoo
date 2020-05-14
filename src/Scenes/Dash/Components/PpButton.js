import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  background: inherit;
  border: none;
  outline: none;
  margin-bottom: 10px;
`;

function iconPath(isActive, color) {
  return isActive ? (
    <>
      <path fill={color} d="M6 5h2v14H6V5zm10 0h2v14h-2V5z" />
    </>
  ) : (
    <>
      <path
        fill={color}
        d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
      />
    </>
  );
}

function PpButton({ isActive, color, click }) {
  return (
    <ButtonWrapper onClick={click}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="40"
        height="40"
        stroke={color}
      >
        {iconPath(isActive, color)}
      </svg>
    </ButtonWrapper>
  );
}

PpButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default PpButton;

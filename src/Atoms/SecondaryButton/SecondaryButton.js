import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SecondaryButton({
  text,
  size = 'default',
  state,
  onButtonClick,
}) {
  if (state === 'DISABLED') {
    return (
      <SecondaryButtonBtn size={size} disabled>
        {text}
      </SecondaryButtonBtn>
    );
  }
  if (state === 'HIDDEN') {
    return (
      <SecondaryButtonBtn size={size} hidden>
        {text}
      </SecondaryButtonBtn>
    );
  }

  return (
    <SecondaryButtonBtn size={size} onClick={onButtonClick}>
      {text}
    </SecondaryButtonBtn>
  );
}

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  state: PropTypes.oneOf(['DEFAULT', 'DISABLED', 'HIDDEN']),
  onButtonClick: PropTypes.func.isRequired,
};

SecondaryButton.defaultProps = {
  size: 'default',
  state: 'DEFAULT',
};

const SecondaryButtonBtn = styled.button`
  border: solid 3px ${(props) => props.theme.colors.white70};
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.colors.white70};
  font-family: ${(props) => props.theme.font.main};
  font-weight: 400;
  font-size: ${(props) => props.theme.font.button[props.size]};
  padding: 0.5em 1.5em;
  border-radius: 4px;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  &:hover:enabled {
    border: solid 3px ${(props) => props.theme.colors.white90};
    color: ${(props) => props.theme.colors.white90};
  }
  &:focus {
    background: ${(props) => props.theme.colors.white30};
    border: solid 3px ${(props) => props.theme.colors.white90};
  }
`;

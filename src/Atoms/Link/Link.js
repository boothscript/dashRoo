import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Link({ text, size = 'default', state, onButtonClick }) {
  if (state === 'DISABLED') {
    return (
      <LinkA size={size} disabled>
        {text}
      </LinkA>
    );
  }
  if (state === 'HIDDEN') {
    return (
      <LinkA size={size} hidden>
        {text}
      </LinkA>
    );
  }

  return (
    <LinkA size={size} onClick={onButtonClick}>
      {text}
    </LinkA>
  );
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  state: PropTypes.oneOf(['DEFAULT', 'DISABLED', 'HIDDEN']),
  onButtonClick: PropTypes.func.isRequired,
};

Link.defaultProps = {
  size: 'default',
  state: 'DEFAULT',
};

const LinkA = styled.a`
  color: ${(props) => props.theme.colors.white70};
  font-family: ${(props) => props.theme.font.main};
  font-weight: 400;
  font-size: ${(props) => props.theme.font.button[props.size]};
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.white70};
  &:hover {
    color: ${(props) =>
      props.disabled ? props.theme.colors.white70 : props.theme.colors.white90};
    border-bottom: 1px solid
      ${(props) =>
        props.disabled
          ? props.theme.colors.white70
          : props.theme.colors.white90};
  }
  &:focus {
    outline: solid 3px ${(props) => props.theme.colors.white90};
  }
`;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function ContextButton({
  text,
  size,
  state,
  icon,
  onButtonClick,
}) {
  if (state === 'DISABLED') {
    return (
      <ContextButtonBtn size={size} icon disabled>
        {icon ? <IconDiv icon={icon} size={size} /> : text}
      </ContextButtonBtn>
    );
  }
  if (state === 'HIDDEN') {
    return (
      <ContextButtonBtn size={size} icon hidden>
        {icon ? <IconDiv icon={icon} size={size} /> : text}
      </ContextButtonBtn>
    );
  }

  return (
    <ContextButtonBtn size={size} icon={!!icon} onClick={onButtonClick}>
      {icon ? <IconDiv icon={icon} size={size} /> : text}
    </ContextButtonBtn>
  );
}

ContextButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large']),
  state: PropTypes.oneOf(['DEFAULT', 'DISABLED', 'HIDDEN']),
  icon: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
};

ContextButton.defaultProps = {
  size: 'default',
  state: 'DEFAULT',
  text: '',
  icon: undefined,
};

const ContextButtonBtn = styled.button`
  border: solid 3px transparent;
  outline: none;
  background: ${(props) => props.theme.colors.white10};
  color: ${(props) => props.theme.colors.white50};
  font-family: ${(props) => props.theme.font.main};
  font-weight: 700;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.font.button[props.size]};
  padding: ${(props) => (props.icon ? '0.2em' : '0.2em 0.8em')};
  border-radius: 4px;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  &:hover:enabled {
    color: ${(props) => props.theme.colors.white90};
  }
  &:focus {
    border: solid 3px ${(props) => props.theme.colors.white90};
  }
`;
const IconDiv = styled.div`
height: ${(props) => props.theme.font.button[props.size]};
width: ${(props) => props.theme.font.button[props.size]};
background: url("/img/${(props) => props.icon}.svg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
opacity: ${(props) => props.opacity}
`;

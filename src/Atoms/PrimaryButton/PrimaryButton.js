import React from 'react';
import styled from 'styled-components';

export default function PrimaryButton({
  text,
  size = 'default',
  state,
  onButtonClick,
}) {
  if (state === 'DISABLED') {
    return (
      <PrimaryButtonBtn size={size} disabled>
        {text}
      </PrimaryButtonBtn>
    );
  }
  if (state === 'HIDDEN') {
    return (
      <PrimaryButtonBtn size={size} hidden>
        {text}
      </PrimaryButtonBtn>
    );
  }

  return (
    <PrimaryButtonBtn size={size} onclick={onButtonClick}>
      {text}
    </PrimaryButtonBtn>
  );
}

const PrimaryButtonBtn = styled.button`
  border: solid 3px transparent;
  outline: none;
  background: ${(props) => props.theme.colors.white70};
  color: black;
  font-family: ${(props) => props.theme.font.main};
  font-weight: 400;
  font-size: ${(props) => props.theme.font.button[props.size]};
  padding: 0.5em 1.5em;
  border-radius: 4px;
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  &:hover:enabled {
    background: ${(props) => props.theme.colors.white90};
  }
  &:focus {
    border: solid 3px ${(props) => props.theme.colors.white90};
  }
`;

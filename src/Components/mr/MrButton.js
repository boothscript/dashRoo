import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  grid-column: 3;
  justify-self: right;
  align-self: start;
  background: ${props => props.theme.panel && props.theme.panel};
  border: 1px solid;
  border-color: ${props =>
    props.disabled ? props.theme.white30 : props.theme.white90};
  border-radius: 16px;
  font-family: ${props => props.theme.font && props.theme.font};
  font-weight: 200;
  font-size: 2rem;
  color: ${props =>
    props.disabled ? props.theme.white30 : props.theme.white90};
  padding: 0.25em 1em;
  text-decoration: none;
  cursor: ${props => (props.disabled ? "default" : "pointer")};
  pointer-events: ${props => (props.disabled ? "none" : "default")};
  &:focus,
  &:hover {
    background: ${props => props.theme.white90 && props.theme.white90};
    color: ${props => props.theme.panel && props.theme.panel};
  }
`;

function MrButton({ text, disabled, url }) {
  // to disable clicks when disabled
  function handleClick(e) {
    if (disabled) {
      e.preventDefault();
    }
  }

  return (
    <Button to={url} onClick={e => handleClick(e)} disabled={disabled}>
      {text}
    </Button>
  );
}

export default MrButton;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.a`
  align-self: center;
  margin-left: auto;
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

function MrButton({ text, disabled, buttonFunc, reverse }) {
  // to disable clicks when disabled
  function handleClick(e) {
    if (disabled) {
      e.preventDefault();
    }
    buttonFunc(reverse);
  }
  return (
    <Button onClick={e => handleClick(e)} disabled={disabled}>
      {text}
    </Button>
  );
}
MrButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  buttonFunc: PropTypes.func.isRequired,
  reverse: PropTypes.bool.isRequired
};

export default MrButton;

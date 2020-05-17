import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
  align-self: center;
  background: ${(props) => props.theme.panel && props.theme.panel};
  border: 1px solid;
  font-size: 1.075rem;
  border-color: ${(props) => props.theme.white30};
  border-radius: 6px;
  font-family: ${(props) => props.theme.font && props.theme.font};
  font-weight: 200;

  color: ${(props) => props.theme.white30};
  padding: 0.25em 1em;
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'default')};
  &:focus,
  &:hover {
    background: ${(props) => props.theme.white90 && props.theme.white90};
    color: ${(props) => props.theme.panel && props.theme.panel};
  }
`;

function PanelButton({ text, disabled, buttonFunc, hide }) {
  // to disable clicks when disabled
  function handleClick(e) {
    if (disabled) {
      e.preventDefault();
    }
    buttonFunc();
  }
  return (
    <Button onClick={handleClick} disabled={disabled} hide={hide}>
      {text}
    </Button>
  );
}
PanelButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  buttonFunc: PropTypes.func.isRequired,
  hide: PropTypes.bool,
};

PanelButton.defaultProps = {
  hide: false,
  disabled: false,
};
export default Button;

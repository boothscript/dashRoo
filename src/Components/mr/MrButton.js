import React from "react";
import styled from "styled-components";

const Button = styled.a`
  grid-column: 3;
  justify-self: right;
  align-self: center;
  background: ${props => props.theme.panel && props.theme.panel};
  border: 1px solid;
  border-color: ${props => props.theme.white90 && props.theme.white90};
  border-radius: 16px;
  font-family: ${props => props.theme.font && props.theme.font};
  font-weight: 200;
  font-size: 2rem;
  color: ${props => props.theme.white90 && props.theme.white90};
  padding: 0.25em 1em;
`;

function MrButton({ text }) {
  return <Button>{text}</Button>;
}

export default MrButton;

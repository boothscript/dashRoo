import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  grid-column: 1/-1;
  align-self: center;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  background: inherit;
  border: none;
  border-radius: 16px;
  background: ${props => props.theme.panel && props.theme.panel};
  color: ${props => props.theme.white90 && props.theme.white90};
  resize: none;
  outline: none;
  padding: 1.25em;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

function MrTextInput({ inputId, confirmFn, placeholder }) {
  const handleChange = e => {
    if (e.target.value) {
      console.log(e.target.value);
      confirmFn({ inputId });
    }
  };

  return (
    <TextInput onChange={e => handleChange(e)} placeholder={placeholder} />
  );
}

export default MrTextInput;

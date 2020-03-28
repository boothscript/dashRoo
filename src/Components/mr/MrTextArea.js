import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;

  background: ${props => props.theme.panel && props.theme.panel};
  border: none;
  border-radius: 16px;
  color: ${props => props.theme.white90 && props.theme.white90};
  resize: none;
  outline: none;
  padding: 2em;
`;

function MrTextArea({ inputId, confirmFn, placeholder }) {
  const handleChange = e => {
    if (e.target.value) {
      console.log(e.target.value);
      confirmFn({ inputId });
    }
  };

  return <TextArea onChange={e => handleChange(e)} placeholder={placeholder} />;
}

export default MrTextArea;

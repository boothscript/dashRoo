import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: ${(props) => (props.small ? '.9rem' : '1.25em')};
  font-weight: 300;
  line-height: 1.5;
  width: 100%;
  background: inherit;

  background: ${(props) => props.theme.panel && props.theme.panel};
  color: ${(props) => props.theme.white90 && props.theme.white90};
  outline: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1em 0.6em;
  border: solid 1px ${(props) => props.theme.white30};
  border-radius: 6px;
`;

function TextInput({ value, onChange, placeholder, small = false }) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      small={small}
    />
  );
}

export default TextInput;

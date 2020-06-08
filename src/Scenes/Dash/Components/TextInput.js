import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  font-size: ${(props) => (props.small ? '.9rem' : '1.25rem')};
  font-weight: 300;
  line-height: 1.5;
  width: 100%;
  background: inherit;

  background: ${(props) => props.theme.panel && props.theme.panel};
  color: ${(props) => props.theme.white90 && props.theme.white90};
  outline: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0.8em 0.6em;
  border: ${(props) => (props.noBorder ? 'none' : 'solid 1px')};
  border-color: ${(props) => props.theme.white30};
  border-radius: 6px;
`;

function TextInput({
  name,
  value,
  onChange,
  placeholder,
  small = false,
  noBorder = false,
}) {
  return (
    <Input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      small={small}
      noBorder={noBorder}
    />
  );
}
TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  small: PropTypes.bool,
  noBorder: PropTypes.bool,
};

export default TextInput;

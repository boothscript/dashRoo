import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  min-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  grid-column: 2/-2;
`;
const Label = styled.label`
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white30};
  font-size: 1.7rem;
  margin-bottom: 10px;
  word-wrap: none;
  min-width: 900px;
`;

const TextInput = styled.input`
  height: 40px;
  width: 100%;

  background: linear-gradient(
    transparent 39.5px,
    rgba(255, 255, 255, 0.1) 39.5px
  );
  background-size: 100% 40px;
  border: none;
  resize: none;
  line-height: 40px;
  outline: none;
  caret-color: ${(props) => props.theme.white90};
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.white30};

  &:focus {
    background: linear-gradient(
      transparent 39.5px,
      rgba(255, 255, 255, 0.15) 39.5px
    );
    background-size: 100% 40px;
    color: ${(props) => props.theme.white90};
  }
`;

function JournalSingleLineEntry({ title, changeFunc, value }) {
  return (
    <Div>
      <Label>{title}</Label>
      <TextInput value={value} onChange={changeFunc} />
    </Div>
  );
}

export default JournalSingleLineEntry;

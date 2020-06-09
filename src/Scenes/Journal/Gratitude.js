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

const GratitudeInput = styled.input`
  height: 40px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
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
  padding-left: 40px;
  &:focus {
    background: linear-gradient(
      transparent 39.5px,
      rgba(255, 255, 255, 0.15) 39.5px
    );
    background-size: 100% 40px;
    color: ${(props) => props.theme.white90};
  }
`;
const GratitudeWrapper = styled.div`
    position: relative;
    height: 40px;
    margin-bottom: 15px;
 &::before {
      content: "${(props) => props.number}.";
      font-size: 1.6rem;
      font-family: ${(props) => props.theme.font};
        color: ${(props) => props.theme.white30};
        display: block;
        position: absolute;
        left: 0;
        top: 5px;
        height: 40px;

;
  }
`;

function Gratitude({ state, dataKey, dispatch, updateField }) {
  return (
    <Div>
      <Label>What Are You Grateful For Today?</Label>
      <GratitudeWrapper number="1">
        <GratitudeInput
          onChange={(e) => {
            dispatch(updateField(dataKey, 'gratitude1', e.target.value));
          }}
          value={state.data[dataKey].gratitude1}
        />
      </GratitudeWrapper>
      <GratitudeWrapper number="2">
        <GratitudeInput
          onChange={(e) => {
            dispatch(updateField(dataKey, 'gratitude2', e.target.value));
          }}
          value={state.data[dataKey].gratitude2}
        />
      </GratitudeWrapper>
      <GratitudeWrapper number="3">
        <GratitudeInput
          onChange={(e) => {
            dispatch(updateField(dataKey, 'gratitude3', e.target.value));
          }}
          value={state.data[dataKey].gratitude3}
        />
      </GratitudeWrapper>
    </Div>
  );
}

export default Gratitude;

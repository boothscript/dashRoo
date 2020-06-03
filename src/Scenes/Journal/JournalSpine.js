import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  margin: 20px 20px 20px 0;
  padding-top: 100px;
  background: ${(props) => props.theme.panel};
  border-radius: 16px;
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const SpineTitle = styled.h2`
  font-family: ${(props) => props.theme.font};
  writing-mode: vertical-rl;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 5px;
`;

function JournalSpine({ title, sectionName, openFunc }) {
  return (
    <Div onClick={() => openFunc(sectionName)}>
      <SpineTitle>{title}</SpineTitle>
    </Div>
  );
}

export default JournalSpine;

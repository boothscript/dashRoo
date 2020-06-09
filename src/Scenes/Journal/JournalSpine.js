import React, { useState } from 'react';
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const SpineTitle = styled.h2`
  font-family: ${(props) => props.theme.font};
  writing-mode: vertical-rl;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 5px;
`;
const TicksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Tick = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) =>
    props.value ? "url('/img/tick-light.svg')" : "url('/img/tick-dark.svg')"};

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function JournalSpine({ title, sectionName, openFunc, fields }) {
  const ticksArray = Object.entries(fields);
  console.log({ ticksArray });
  return (
    <Div onClick={() => openFunc(sectionName)}>
      <SpineTitle>{title}</SpineTitle>
      <TicksWrapper>
        {ticksArray.map(([key, value]) => {
          console.log(key, value);
          return <Tick value={!!value} />;
        })}
      </TicksWrapper>
    </Div>
  );
}

export default JournalSpine;

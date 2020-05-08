import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import faker from 'faker';

import { CheckBox, CheckBoxAnimated } from './CheckBoxes';

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  margin: 15px 0;
`;

function WeekCheck({
  weekArray,
  updateWeekArray,
  color = null,
  animated = false,
}) {
  if (weekArray.length !== 7) {
    console.log({ weekArray });
    throw new Error('Array must be length of 7');
  }
  const CheckBoxComponent = animated ? CheckBoxAnimated : CheckBox;
  function toggleItem(toggleIndex) {
    console.log('running toggle');
    updateWeekArray(
      weekArray.map((item, index) => (toggleIndex === index ? !item : item))
    );
  }
  console.log('rendering weekcheck', weekArray, CheckBoxComponent);
  return (
    <Div>
      {weekArray.map((item, index) => (
        <CheckBoxComponent
          key={index}
          value={item}
          index={index}
          handleClick={toggleItem}
          color={color}
        />
      ))}
    </Div>
  );
}

export default WeekCheck;

import React from 'react';
import styled from 'styled-components';

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
  // Validation
  if (weekArray.length !== 7) {
    console.log({ weekArray });
    throw new Error('Array must be length of 7');
  }
  // Choose checkbox component
  const CheckBoxComponent = animated ? CheckBoxAnimated : CheckBox;

  // click handler
  function toggleItem(toggleIndex) {
    updateWeekArray(
      weekArray.map((item, index) => (toggleIndex === index ? !item : item))
    );
  }

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

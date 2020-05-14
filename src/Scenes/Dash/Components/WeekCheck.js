import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CheckBox, CheckBoxAnimated } from './CheckBoxes';

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin: 0;
`;

function WeekCheck({
  weekArray,
  updateWeekArray,
  color = null,
  animated = false,
}) {
  // Validation
  if (weekArray.length !== 7) {
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

WeekCheck.propTypes = {
  weekArray: PropTypes.arrayOf(PropTypes.bool).isRequired,
  updateWeekArray: PropTypes.func.isRequired,
  color: PropTypes.string,
  animated: PropTypes.bool,
};

export default WeekCheck;

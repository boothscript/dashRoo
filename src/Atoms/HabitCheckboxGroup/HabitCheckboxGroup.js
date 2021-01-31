import React from 'react';
import styled from 'styled-components';

import HabitCheckbox from '../HabitCheckbox/HabitCheckbox';

export default function HabitCheckboxGroup({ data, color, updateFunc }) {
  return (
    <HabitCheckboxGroupWrapper>
      {data.enabled.map((isEnabled, dayNumber) => {
        const value = data.completed[dayNumber];

        return (
          <HabitCheckbox
            value={value}
            color={color}
            disabled={!isEnabled}
            onCheckboxClick={updateFunc}
            index={dayNumber}
          />
        );
      })}
    </HabitCheckboxGroupWrapper>
  );
}

const HabitCheckboxGroupWrapper = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  width: 100%;
`;

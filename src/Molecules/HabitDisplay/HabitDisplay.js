import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HabitCheckboxGroup from '../../Atoms/HabitCheckboxGroup/HabitCheckboxGroup';
import ProgressBar from '../../Atoms/ProgressBar/ProgressBar';

import * as colors from '../../Themes/colors';

function calculateProgressBarValue(habitData, weeklyTarget) {
  const completedDaysCount = habitData.completed.reduce(
    (count, isCompleted) => count + isCompleted
  );
  return (completedDaysCount / weeklyTarget) * 100;
}
export default function HabitDisplay({
  habitName,
  habitData,
  habitUpdate,
  color,
  weeklyTarget,
}) {
  return (
    <HabitDisplayWrapper>
      <HabitName>{habitName}</HabitName>
      <HabitInterfaceWrapper>
        <HabitCheckboxGroup
          data={habitData}
          updateFunc={habitUpdate}
          color={color}
        />
        <ProgressBar
          backgroundColor={colors.white10}
          valueColor={color}
          value={calculateProgressBarValue(habitData, weeklyTarget)}
        />
      </HabitInterfaceWrapper>
    </HabitDisplayWrapper>
  );
}

HabitDisplay.propTypes = {
  habitName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  habitData: PropTypes.object({
    isEnabled: PropTypes.arrayOf(PropTypes.bool),
    completed: PropTypes.arrayOf(PropTypes.bool),
    weeklyTarget: PropTypes.number,
  }),
  habitUpdate: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  weeklyTarget: PropTypes.number,
};

const HabitDisplayWrapper = styled.div`
  display: flex;
  width: 600px;
  align-items: center;
  padding: 0 2em;
  height: 4em;
`;

const HabitName = styled.p`
  display: block;
  color: ${(props) => props.theme.colors.white90};
  font-family: ${(props) => props.theme.font.main};
  width: 40%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 1em;
`;

const HabitInterfaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  justify-content: space-between;
  padding: 0.5em 0;
`;

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { action } from '@storybook/addon-actions';

import HabitDisplay from './HabitDisplay';

export default {
  component: HabitDisplay,
  title: 'Habit Display',
  excludeStories: /.*Data$/,
  decorators: [
    (story) => (
      <div
        style={{
          padding: '3em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const EmptyData = {
  habitName: 'Exercise',
  habitData: {
    enabled: [true, true, true, true, true, true, true],
    completed: [false, false, false, false, false, false, false],
  },
  weeklyTarget: 7,
};
export const CompletedData = {
  habitName: 'Exercise',
  habitData: {
    enabled: [true, true, true, true, true, true, true],
    completed: [true, true, true, true, true, true, true],
  },
  weeklyTarget: 7,
};
export const TwoCompletedData = {
  habitName: 'Exercise',
  habitData: {
    enabled: [true, true, true, true, true, true, true],
    completed: [false, true, false, true, false, false, false],
  },
  weeklyTarget: 4,
};

export const Empty = () => (
  <>
    <HabitDisplay
      habitName={EmptyData.habitName}
      habitData={EmptyData.habitData}
      weeklyTarget={EmptyData.weeklyTarget}
      color="#8497e8"
    />
  </>
);
export const Completed = () => (
  <>
    <HabitDisplay
      habitName={CompletedData.habitName}
      habitData={CompletedData.habitData}
      weeklyTarget={CompletedData.weeklyTarget}
      color="#8497e8"
    />
  </>
);
export const TwoCompleted = () => (
  <>
    <HabitDisplay
      habitName={TwoCompletedData.habitName}
      habitData={TwoCompletedData.habitData}
      weeklyTarget={TwoCompletedData.weeklyTarget}
      color="#8497e8"
    />
  </>
);
export const LongName = () => (
  <>
    <HabitDisplay
      habitName="Drink 8 glasses of water every day these are some omore words this is more words to overflow"
      habitData={TwoCompletedData.habitData}
      weeklyTarget={TwoCompletedData.weeklyTarget}
      color="#8497e8"
    />
  </>
);

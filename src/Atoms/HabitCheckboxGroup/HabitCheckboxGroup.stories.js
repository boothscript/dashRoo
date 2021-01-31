import React from 'react';
import { action } from '@storybook/addon-actions';

import HabitCheckboxGroup from './HabitCheckboxGroup';

export default {
  component: HabitCheckboxGroup,
  title: 'Habit Checkbox Group',
  excludeStories: /.*Data$/,
  decorators: [
    (story) => (
      <div
        style={{
          width: '400px',
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
  data: {
    enabled: [true, true, true, true, true, true, true],
    completed: [false, false, false, false, false, false, false],
  },
};
export const CompletedData = {
  data: {
    enabled: [true, true, true, true, true, true, true],
    completed: [true, true, true, true, true, true, true],
  },
};
export const SomeCompletedData = {
  data: {
    enabled: [true, true, true, true, false, true, true],
    completed: [false, true, false, true, false, true, false],
  },
};

export const Empty = () => {
  return (
    <HabitCheckboxGroup
      data={EmptyData.data}
      color="#8497e8"
      updateFunc={action('updateFunc Called')}
    />
  );
};
export const Completed = () => {
  return (
    <HabitCheckboxGroup
      data={CompletedData.data}
      color="#8497e8"
      updateFunc={action('updateFunc Called')}
    />
  );
};
export const SomeCompleted = () => {
  return (
    <HabitCheckboxGroup
      data={SomeCompletedData.data}
      color="#8497e8"
      updateFunc={action('updateFunc Called')}
    />
  );
};

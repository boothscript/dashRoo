/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import PrimaryButton from './PrimaryButton';

export default {
  component: PrimaryButton,
  title: 'Primary Button',
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

export const DefaultData = { text: 'Button', size: '', state: 'DEFAULT' };
export const DisabledData = { ...DefaultData, state: 'DISABLED' };
export const HiddenData = { ...DefaultData, state: 'HIDDEN' };

export const Default = () => (
  <>
    <PrimaryButton
      text="Button"
      state="DEFAULT"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <PrimaryButton
      text="Button"
      state="DEFAULT"
      onButtonClick={action('onButtonClick')}
    />
    <PrimaryButton
      text="Button"
      state="DEFAULT"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

export const Disabled = () => (
  <>
    <PrimaryButton
      text="Button"
      state="DISABLED"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <PrimaryButton
      text="Button"
      state="DISABLED"
      onButtonClick={action('onButtonClick')}
    />
    <PrimaryButton
      text="Button"
      state="DISABLED"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

export const Hidden = () => (
  <>
    <PrimaryButton
      text="Button"
      state="HIDDEN"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <PrimaryButton
      text="Button"
      state="HIDDEN"
      onButtonClick={action('onButtonClick')}
    />
    <PrimaryButton
      text="Button"
      state="HIDDEN"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

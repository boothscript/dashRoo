/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import ContextButton from './ContextButton';

export default {
  component: ContextButton,
  title: 'Context Button',
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
    <ContextButton
      text="Button"
      state="DEFAULT"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <ContextButton
      text="Button"
      state="DEFAULT"
      onButtonClick={action('onButtonClick')}
    />
    <ContextButton
      text="Button"
      state="DEFAULT"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

export const Disabled = () => (
  <>
    <ContextButton
      text="Button"
      state="DISABLED"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <ContextButton
      text="Button"
      state="DISABLED"
      onButtonClick={action('onButtonClick')}
    />
    <ContextButton
      text="Button"
      state="DISABLED"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

export const Hidden = () => (
  <>
    <ContextButton
      text="Button"
      state="HIDDEN"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <ContextButton
      text="Button"
      state="HIDDEN"
      onButtonClick={action('onButtonClick')}
    />
    <ContextButton
      text="Button"
      state="HIDDEN"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

export const Icon = () => {
  return (
    <>
      <ContextButton
        icon="gear"
        state="DEFAULT"
        size="large"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="DEFAULT"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="DEFAULT"
        size="small"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="DISABLED"
        size="large"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="DISABLED"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="DISABLED"
        size="small"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="HIDDEN"
        size="large"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="HIDDEN"
        onButtonClick={action('onButtonClick')}
      />
      <ContextButton
        icon="gear"
        state="HIDDEN"
        size="small"
        onButtonClick={action('onButtonClick')}
      />
    </>
  );
};

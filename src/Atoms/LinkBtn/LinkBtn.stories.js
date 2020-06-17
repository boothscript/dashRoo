/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import LinkBtn from './LinkBtn';

export default {
  component: LinkBtn,
  title: 'LinkBtn',
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
    <LinkBtn
      text="Button"
      state="DEFAULT"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <LinkBtn
      text="Button"
      state="DEFAULT"
      onButtonClick={action('onButtonClick')}
    />
    <LinkBtn
      text="Button"
      state="DEFAULT"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

export const Disabled = () => (
  <>
    <LinkBtn
      text="Button"
      state="DISABLED"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <LinkBtn
      text="Button"
      state="DISABLED"
      onButtonClick={action('onButtonClick')}
    />
    <LinkBtn
      text="Button"
      state="DISABLED"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

export const Hidden = () => (
  <>
    <LinkBtn
      text="Button"
      state="HIDDEN"
      size="large"
      onButtonClick={action('onButtonClick')}
    />
    <LinkBtn
      text="Button"
      state="HIDDEN"
      onButtonClick={action('onButtonClick')}
    />
    <LinkBtn
      text="Button"
      state="HIDDEN"
      size="small"
      onButtonClick={action('onButtonClick')}
    />
  </>
);

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

export default {
  container: Checkbox,
  title: 'Checkbox',
  decorators: [(story) => <div style={{ padding: '3em' }}>{story()}</div>],
};

export const UnChecked = () => (
  <Checkbox
    value={false}
    text="M"
    id="Monday"
    onCheckboxChange={action('onCheckboxChange')}
  />
);
export const Checked = () => (
  <Checkbox
    value
    text="M"
    id="Monday"
    onCheckboxChange={action('onCheckboxChange')}
  />
);
export const NoText = () => (
  <Checkbox
    value={false}
    id="Monday"
    onCheckboxChange={action('onCheckboxChange')}
  />
);
// export const Word = () => (
//   <Checkbox
//     value={false}
//     text="Monday"
//     id="Monday"
//     onCheckboxChange={action('onCheckboxChange')}
//   />
// );

import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '../../../../../../../Utils/test-utils';

import MrGoal from '../MrGoal';

describe('MrTextInput', () => {
  afterEach(cleanup);
  it('input is controlled by state', () => {
    const { getByDisplayValue, getByPlaceholderText } = render(
      <MrGoal style={{}} dataKey="goal" />
    );
    expect(getByPlaceholderText(/What's/i).value).toBe('');
    fireEvent.change(getByPlaceholderText(/What's/i), {
      target: { value: 'this is test' },
    });
    expect(getByDisplayValue('this is test').value).not.toBe('');
  });

  // tried to test that the correct input is focused on display but am unable to due to the timeout in useEffect, necessary for animation
});

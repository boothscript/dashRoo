import React from 'react';
import { render, fireEvent, cleanup } from '../../../../Utils/test-utils';

import TodaysGoal from '../TodaysGoal';

// render has been overwritten by a custom render to include all providers

describe('TodaysGoal', () => {
  afterEach(cleanup);

  test('renders without crash', () => {
    render(<TodaysGoal />);
  });
  test('Field is empty with no goal set', () => {
    const { getByTestId } = render(<TodaysGoal />);
    expect(getByTestId('goalInput').value).toBe('');
  });
  test('Controlled input updates on change', () => {
    const { getByTestId } = render(<TodaysGoal />);
    const goalInput = getByTestId('goalInput');
    fireEvent.change(goalInput, { target: { value: 'text' } });
    expect(goalInput.value).toBe('text');
  });
});

import React from 'react';
import { render, act } from '@testing-library/react';
import useMultiStage from '../useMultiStage';

function setup(...args) {
  const returnVal = {};
  function TestComponent() {
    Object.assign(returnVal, useMultiStage(...args));
    return null;
  }
  render(<TestComponent />);
  return returnVal;
}

test('allows client to setup and navigate the steps array', () => {
  const multiStepData = setup([{ name: '' }, { address: '' }, { email: '' }]);

  // assert initial state
  expect(multiStepData.index).toBe(0);
  expect(multiStepData.steps).toBe(3);

  // move forward
  act(() => {
    multiStepData.navigation.next();
  });
  // assert new state
  expect(multiStepData.index).toBe(1);
  expect(multiStepData.steps).toBe(3);

  // move backwards
  act(() => {
    multiStepData.navigation.back();
  });
  // assert new state
  expect(multiStepData.index).toBe(0);
  expect(multiStepData.steps).toBe(3);

  // test backwards boundary
  act(() => {
    multiStepData.navigation.back();
  });
  // assert new state
  expect(multiStepData.index).toBe(0);
  expect(multiStepData.steps).toBe(3);

  // test forwards boundary
  act(() => {
    multiStepData.navigation.next();
    multiStepData.navigation.next();
    multiStepData.navigation.next();
  });
  // assert new state
  expect(multiStepData.index).toBe(2);
  expect(multiStepData.steps).toBe(3);
});

test('returns array of the fields state', () => {
  const multiStepData = setup([{ name: '' }, { address: '' }, { email: '' }]);
  expect(multiStepData.data).toEqual({ name: '', address: '', email: '' });
});

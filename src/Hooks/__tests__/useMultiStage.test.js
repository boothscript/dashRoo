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

test('allows client to setup and navigate the steps array with correct direction', () => {
  const multiStepData = setup([{ name: '' }, { address: '' }, { email: '' }]);
  console.log({ multiStepData });
  // assert initial state
  expect(multiStepData.stepIndex).toBe(0);
  expect(multiStepData.totalSteps).toBe(3);
  expect(multiStepData.direction).toBe('start');

  // move forward
  act(() => {
    multiStepData.navigation.next();
  });
  // assert new state
  expect(multiStepData.stepIndex).toBe(1);
  expect(multiStepData.totalSteps).toBe(3);
  expect(multiStepData.direction).toBe('fwd');

  // move backwards
  act(() => {
    multiStepData.navigation.back();
  });
  // assert new state
  expect(multiStepData.stepIndex).toBe(0);
  expect(multiStepData.totalSteps).toBe(3);
  expect(multiStepData.direction).toBe('back');

  // test backwards boundary
  act(() => {
    multiStepData.navigation.back();
  });
  // assert new state
  expect(multiStepData.stepIndex).toBe(0);
  expect(multiStepData.totalSteps).toBe(3);
  expect(multiStepData.direction).toBe('none');
  // test forwards boundary
  act(() => {
    multiStepData.navigation.next();
    multiStepData.navigation.next();
    multiStepData.navigation.next();
  });
  // assert new state
  expect(multiStepData.stepIndex).toBe(2);
  expect(multiStepData.totalSteps).toBe(3);
  expect(multiStepData.direction).toBe('none');
});

test('returns array of the fields state', () => {
  const multiStepData = setup([
    { name: 'steve' },
    { address: 'london' },
    { email: 'steve@gmail.com' },
  ]);
  expect(multiStepData.formValues).toEqual([
    { name: 'steve' },
    { address: 'london' },
    { email: 'steve@gmail.com' },
  ]);

  //   change field value
  act(() => {
    multiStepData.setValue(0, 'name', 'Stephen');
    multiStepData.setValue(1, 'address', 'Liverpool');
    multiStepData.setValue(2, 'email', 'email@gmail.com');
  });

  //   assert new state
  expect(multiStepData.formValues).toEqual([
    { name: 'Stephen' },
    { address: 'Liverpool' },
    { email: 'email@gmail.com' },
  ]);
});

test('Hook passes down completed step information', () => {
  const multiStepData = setup([
    { name: '', age: '' },
    { address: '', city: '' },
    { email: '', mobile: '' },
  ]);

  //   assert state
  expect(multiStepData.formValues).toEqual([
    { name: '', age: '' },
    { address: '', city: '' },
    { email: '', mobile: '' },
  ]);
  expect(multiStepData.stepsCompleted).toEqual([false, false, false]);

  //   one field added
  act(() => {
    multiStepData.setValue(0, 'name', 'Stephen');
  });
  // assert new state
  expect(multiStepData.stepsCompleted).toEqual([false, false, false]);

  //   second field added (same step)
  act(() => {
    multiStepData.setValue(0, 'age', '30');
  });
  // assert first step is completed
  expect(multiStepData.stepsCompleted).toEqual([true, false, false]);

  //   add all remaining fields
  act(() => {
    multiStepData.setValue(1, 'address', 'Liverpool');
    multiStepData.setValue(1, 'city', 'Mersey');
    multiStepData.setValue(2, 'email', 'email@gmail.com');
    multiStepData.setValue(2, 'mobile', '0774120283456');
  });
  // assert first step is completed
  expect(multiStepData.stepsCompleted).toEqual([true, true, true]);
});

import { cleanup } from '@testing-library/react';

import { initialState, reducer } from '../Reducers/MorningRoutineReducer';
import * as actions from '../Actions/MorningRoutineActions';

describe('Testing MorningRoutine reducer and actions', () => {
  afterEach(cleanup);
  it('returns initial state', () => {
    expect(initialState.step).toBe('rate');
    expect(initialState.direction).toBe('fwd');
    expect(initialState.data).toStrictEqual({
      ratings: { day: null, sleep: null },
      gratitude: { 1: '', 2: '', 3: '' },
      goal: { text: '' },
    });
  });

  it('should update data field using action creator', () => {
    const newState = reducer(
      initialState,
      actions.updateField('gratitude', '1', 'test')
    );
    expect(newState.data.gratitude['1']).toBe('test');
  });
  it('should update step and direction submitRate', () => {
    const newState = reducer(initialState, actions.submitRate());
    expect(newState.step).toBe('gratitude');
    expect(newState.direction).toBe('fwd');
  });
  it('should update step and direction submitGratitude', () => {
    const newState = reducer(initialState, actions.submitGratitude());
    expect(newState.step).toBe('goal');
    expect(newState.direction).toBe('fwd');
  });
  it('should update step and direction submitGoal', () => {
    const newState = reducer(initialState, actions.submitGoal());
    expect(newState.step).toBe('complete');
    expect(newState.direction).toBe('fwd');
  });
  it('should change direction goBack', () => {
    const newState = reducer(initialState, actions.submitRate());
    const newerState = reducer(newState, actions.goBack());
    expect(newerState.step).toBe('rate');
    expect(newerState.direction).toBe('back');
  });
});

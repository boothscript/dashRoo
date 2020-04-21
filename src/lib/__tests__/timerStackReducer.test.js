import { cleanup } from '@testing-library/react';
import { reducer, initialState } from '../Reducers/timerStackReducer';
import * as actions from '../Actions/timerStackActions';

describe('timerStack reducer unit tests', () => {
  afterEach(cleanup);
  it('return initial state', () => {
    expect(initialState).toStrictEqual({
      mode: 'session',
      isTicking: false,
      projectSelected: {
        title: 'project rooter',
        id: 'gsdjhfg',
        color: '#B3F8F1',
      },
      timerValue: 1500000,
      startValue: 1500000,
      sessionCount: 0,
      data: { sessionArr: [] },
    });
  });
  it('should toggle tick', () => {
    const newState = reducer(initialState, actions.toggleTimer());
    expect(newState.isTicking).toBe(true);
  });
  it('should update time when ticking', () => {
    const startingState = { ...initialState, isTicking: true };
    const newState = reducer(
      startingState,
      actions.updateTime(startingState, 100)
    );
    expect(newState.timerValue).toBe(100);
    expect(newState.startValue).not.toBe(100);
  });
  it('should update time when NOT ticking', () => {
    const startingState = { ...initialState, isTicking: false };
    const newState = reducer(
      startingState,
      actions.updateTime(startingState, 100)
    );
    expect(newState.timerValue).toBe(100);
    expect(newState.startValue).toBe(100);
  });
  it('should update mode and timers', () => {
    const newState = reducer(initialState, actions.updateMode('break', 100));
    expect(newState.mode).toBe('break');
    expect(newState.timerValue).toBe(100);
    expect(newState.startValue).toBe(100);
  });
  it('should add session obj', () => {
    const newState = reducer(
      initialState,
      actions.addSession({ test: 'test' })
    );
    expect(newState.data.sessionArr).toStrictEqual([{ test: 'test' }]);
  });
  it('should update count', () => {
    const newState = reducer(initialState, actions.updateCount(1));
    expect(newState.sessionCount).toBe(1);
  });
});

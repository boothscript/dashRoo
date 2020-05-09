import {
  TOGGLE_TICK,
  UPDATE_TIME,
  UPDATE_PROJECT,
  UPDATE_MODE,
  ADD_SESSION,
  UPDATE_COUNT,
} from '../Actions/timerStackTypes';

const durations = { session: 15000, break: 15000, longBreak: 15000 }; // time in seconds

const initialState = {
  mode: 'session',
  isTicking: false,
  projectSelected: { title: 'project rooter', id: 'gsdjhfg', color: '#B3F8F1' },
  timerValue: durations.session,
  startValue: durations.session,
  sessionCount: 0,
  data: { sessionArr: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_TICK:
      return {
        ...state,
        isTicking: !state.isTicking,
      };
    case UPDATE_TIME:
      return {
        ...state,
        timerValue: action.timerValue,
        startValue: action.startValue,
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        projectSelected: action.projectObject,
      };
    case UPDATE_MODE:
      return {
        ...state,
        timerValue: action.timerValue,
        startValue: action.startValue,
        mode: action.newMode,
      };
    case ADD_SESSION:
      return {
        ...state,
        data: {
          ...state.data,
          sessionArr: [...state.data.sessionArr, action.session],
        },
      };
    case UPDATE_COUNT:
      return {
        ...state,
        sessionCount: action.count,
      };

    default:
      throw new Error();
  }
}

export { reducer, initialState, durations };

import {
  TOGGLE_TICK,
  TOGGLE_EDIT,
  UPDATE_TIME,
  UPDATE_PROJECT,
  UPDATE_MODE,
  UPDATE_COUNT,
  ADD_SESSION,
  INIT_EDIT_MODE,
  UPDATE_TIME_AND_EDIT,
  UPDATE_EDIT_TIME,
  RELOAD_STATE,
} from '../Actions/timerStackTypes';

import { getStoredState } from '../Context/timerStackContext';

const durations = { session: 1500000, break: 300000, longBreak: 1500000 }; // time in seconds

const initialState = {
  mode: 'session',
  isTicking: false,
  isInEdit: false,
  editTime: null,
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
    case TOGGLE_EDIT:
      return {
        ...state,
        isInEdit: !state.isInEdit,
      };

    case INIT_EDIT_MODE:
      return {
        ...state,
        isInEdit: action.isInEdit,
        editTimerValue: action.editTimerValue,
        prevTimerValue: action.prevTimerValue,
      };

    case UPDATE_TIME_AND_EDIT:
      return {
        ...state,
        timerValue: action.timerValue,
        startValue: action.startValue,
        isInEdit: action.isInEdit,
      };

    case UPDATE_EDIT_TIME:
      return {
        ...state,
        editTimerValue: action.editTimerValue,
      };

    case UPDATE_TIME:
      return state.isTicking
        ? {
            ...state,
            timerValue: state.timerValue + action.delta,
          }
        : { ...state };
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
    case RELOAD_STATE:
      console.log('in reducer');
      return getStoredState(action.payload);

    default:
      throw new Error();
  }
}

export { reducer, initialState, durations };

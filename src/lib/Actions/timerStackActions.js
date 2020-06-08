import {
  TOGGLE_TICK,
  UPDATE_TIME,
  UPDATE_PROJECT,
  UPDATE_MODE,
  UPDATE_COUNT,
  ADD_SESSION,
  INIT_EDIT_MODE,
  UPDATE_TIME_AND_EDIT,
  UPDATE_EDIT_TIME,
  RELOAD_STATE,
} from './timerStackTypes';

function reloadState(selectedDate) {
  return { type: RELOAD_STATE, payload: selectedDate };
}

function toggleTimer() {
  return {
    type: TOGGLE_TICK,
  };
}

// turn timer edit on
function editTimer(state, timeText) {
  return {
    type: INIT_EDIT_MODE,
    isInEdit: true,
    editTimerValue: timeText,
    prevTimerValue: state.timerValue,
  };
}

// turn timer edit off
function validateEdit(state, newTime) {
  if (newTime) {
    return {
      type: UPDATE_TIME_AND_EDIT,
      timerValue: newTime,
      startValue: newTime,
      isInEdit: false,
    };
  }
  return {
    type: UPDATE_TIME_AND_EDIT,
    timerValue: state.prevTimerValue,
    startValue: state.startValue,
    isInEdit: false,
  };
}

function updateEdit(newTime) {
  return {
    type: UPDATE_EDIT_TIME,
    editTimerValue: newTime,
  };
}

function updateTime(delta) {
  return {
    type: UPDATE_TIME,
    delta,
  };
}

function updateProject(projectObj) {
  return {
    type: UPDATE_PROJECT,
    projectObject: projectObj,
  };
}

function updateMode(newMode, newTime) {
  return {
    type: UPDATE_MODE,
    newMode,
    timerValue: newTime,
    startValue: newTime,
  };
}
function addSession(sessionObj) {
  return {
    type: ADD_SESSION,
    session: sessionObj,
  };
}

function updateCount(newCount) {
  return {
    type: UPDATE_COUNT,
    count: newCount,
  };
}

export {
  toggleTimer,
  updateTime,
  updateProject,
  updateMode,
  addSession,
  updateCount,
  editTimer,
  validateEdit,
  updateEdit,
  reloadState,
};

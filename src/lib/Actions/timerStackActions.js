import {
  TOGGLE_TICK,
  UPDATE_TIME,
  UPDATE_PROJECT,
  UPDATE_MODE,
  UPDATE_COUNT,
  ADD_SESSION,
} from './timerStackTypes';

function toggleTimer() {
  return {
    type: TOGGLE_TICK,
  };
}
function updateTime(state, newTime) {
  //   if timer is ticking do not overide the startValue
  return {
    type: UPDATE_TIME,
    timerValue: newTime,
    startValue: state.isTicking ? state.startValue : newTime,
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
};

import {
  UPDATE_FIELD,
  SUBMIT_RATE,
  SUBMIT_GRATITUDE,
  SUBMIT_GOAL,
  GO_BACK,
} from "./MorningRoutineTypes";

function updateField(dataKey, field, value) {
  return { type: UPDATE_FIELD, dataKey, field, value };
}

function submitRate() {
  return { type: SUBMIT_RATE, step: "gratitude", direction: "fwd" };
}

function submitGratitude() {
  return { type: SUBMIT_GRATITUDE, step: "goal", direction: "fwd" };
}

function submitGoal() {
  return { type: SUBMIT_GOAL, step: "complete", direction: "fwd" };
}

function goBack() {
  return { type: GO_BACK };
}

export { updateField, submitRate, submitGratitude, submitGoal, goBack };

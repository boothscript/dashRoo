import { RELOAD_STATE, UPDATE_FIELD } from './JournalTypes';

export function reloadState(date) {
  return { type: RELOAD_STATE, payload: date };
}

export function updateField(dataKey, field, value) {
  return {
    type: UPDATE_FIELD,
    dataKey,
    field,
    value,
  };
}

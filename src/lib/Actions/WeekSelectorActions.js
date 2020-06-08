import {
  GO_BACK_ONE_WEEK,
  GO_FORWARD_ONE_WEEK,
  CHANGE_SELECTED_DAY,
} from './WeekSelectorTypes';

export function goBackOneWeek() {
  return {
    type: GO_BACK_ONE_WEEK,
  };
}
export function goForwardOneWeek() {
  return {
    type: GO_FORWARD_ONE_WEEK,
  };
}
export function changeSelectedDay(newDate) {
  return { type: CHANGE_SELECTED_DAY, payload: newDate };
}

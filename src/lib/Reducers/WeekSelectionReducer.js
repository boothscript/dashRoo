import moment from 'moment';

import {
  GO_BACK_ONE_WEEK,
  GO_FORWARD_ONE_WEEK,
  CHANGE_SELECTED_DAY,
} from '../Actions/WeekSelectorTypes';

const initialState = {
  todaysDate: moment(),
  selectedDate: moment(),
};

function reducer(state, action) {
  switch (action.type) {
    case GO_BACK_ONE_WEEK:
      return {
        ...state,
        selectedDate: moment(state.selectedDate).subtract(1, 'weeks'),
      };
    case GO_FORWARD_ONE_WEEK:
      return {
        ...state,
        selectedDate: moment(state.selectedDate).add(1, 'weeks'),
      };
    case CHANGE_SELECTED_DAY:
      return { ...state, selectedDate: moment(action.payload) };
    default:
      throw new Error();
  }
}

export { reducer, initialState };

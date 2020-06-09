import moment from 'moment';
import { RELOAD_STATE, UPDATE_FIELD } from '../Actions/JournalTypes';

import { getStoredState } from '../Context/WeekSelectorContext';
import JournalRepo from '../Storage/JournalRepo';

const initialState = {
  date: moment().format(),
  data: {
    morning: {
      dayRating: null,
      sleepRating: null,
      gratitude1: '',
      gratitude2: '',
      gratitude3: '',
      goal: '',
    },
    devLog: { log: '' },
    evening: {
      positive: '',
      negative: '',
      gratitude1: '',
      gratitude2: '',
      gratitude3: '',
    },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        data: {
          ...state.data,
          [action.dataKey]: {
            ...state.data[action.dataKey],
            [action.field]: action.value,
          },
        },
      };
    case RELOAD_STATE:
      return getStoredState(JournalRepo, initialState)(action.payload);
    default:
      throw new Error();
  }
}

export { reducer, initialState };

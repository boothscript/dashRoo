import HabitsRepo from '../Storage/HabitsRepo';

import { UPDATE_HABIT_WEEK_ARRAY, ADD_NEW_HABIT } from '../Actions/HabitTypes';

const initialState = HabitsRepo.getAll();

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_HABIT_WEEK_ARRAY:
      return state.map((habit) => {
        if (habit.id === action.id) {
          return {
            ...habit,
            data: habit.data.map((week) => {
              if (week.weekNumber === action.weekNumber) {
                return { ...week, completed: action.newArr };
              }
              return week;
            }),
          };
        }
        return habit;
      });
    case ADD_NEW_HABIT:
      return [...state, action.payload];
    default:
      throw new Error();
  }
}

export { reducer, initialState };

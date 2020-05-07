import HabitsRepo from '../Storage/HabitsRepo';

import { UPDATE_HABIT_WEEK_ARRAY } from '../Actions/HabitTypes';

const initialState = HabitsRepo.getAll();
console.log({ initialState });
function reducer(state, action) {
  console.log('in reducer');
  console.log({ state });
  console.log(action);
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
    default:
      throw new Error();
  }
}

export { reducer, initialState };

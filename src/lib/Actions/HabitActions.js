import { UPDATE_HABIT_WEEK_ARRAY } from '../Actions/HabitTypes';

function updateHabitData(id, weekNumber, newArr) {
  console.log('in habitdata');
  console.log({ newArr });
  return {
    type: UPDATE_HABIT_WEEK_ARRAY,
    id,
    weekNumber,
    newArr,
  };
}

export { updateHabitData };

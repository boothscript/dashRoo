import { UPDATE_HABIT_WEEK_ARRAY, ADD_NEW_HABIT } from './HabitTypes';
import HabitRepo from '../Storage/HabitsRepo';
import HabitsRepo from '../Storage/HabitsRepo';

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
function addNewHabit(payload) {
  const newHabit = HabitsRepo.createHabit(payload);
  return {
    type: ADD_NEW_HABIT,
    payload: newHabit,
  };
}

export { updateHabitData, addNewHabit };

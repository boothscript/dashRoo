import moment from 'moment';
import Repo from './Repo';

class HabitRepo extends Repo {
  getAll() {
    const habits = super.getAll();
    const date = new Date();

    try {
      const result = habits.map((habit) => {
        if (
          habit.data.find(
            (dataWeek) =>
              dataWeek.weekNumber === moment(date).week() &&
              dataWeek.year === date.getFullYear()
          )
        ) {
          return habit;
        }

        habit.data.push(this.createHabitDataWeek(date));
        return habit;
      });
      return result;
    } catch (err) {
      return habits;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getHabitColor() {
    if (!localStorage.getItem('habitColors')) {
      localStorage.setItem(
        'habitColors',
        JSON.stringify({
          colors: ['#EBEE89', '#EE9FD3', '#8497E8', '#66F2E4', '#F08D8F'],
          colorQueue: [],
        })
      );
    }
    const habitColors = JSON.parse(localStorage.getItem('habitColors'));

    if (habitColors.colorQueue.length === 0) {
      habitColors.colorQueue = [...habitColors.colors];
    }
    const result = habitColors.colorQueue.pop();
    localStorage.setItem('habitColors', JSON.stringify(habitColors));
    return result;
  }

  createHabitDataWeek(date) {
    return {
      id: this.randomId(),
      weekNumber: moment(date).week(),
      year: date.getFullYear(),
      completed: Array(7).fill(false),
    };
  }

  createHabit(payload) {
    const date = new Date();
    return {
      ...payload,
      id: this.randomId(),
      color: this.getHabitColor(),
      dateCreated: date,
      data: [this.createHabitDataWeek(date)],
    };
  }

  updateStored(payload) {
    localStorage.setItem(this.keyName, JSON.stringify(payload));
  }
}

export default new HabitRepo('habits');

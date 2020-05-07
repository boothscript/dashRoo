import moment from 'moment';
import Repo from './Repo';

class HabitRepo extends Repo {
  getAll() {
    const habits = super.getAll();
    const date = new Date();
    console.log('in get all', { habits });
    try {
      const result = habits.map((habit) => {
        if (
          habit.data.find(
            (dataWeek) =>
              dataWeek.weekNumber === moment(date).week() &&
              dataWeek.year === date.getFullYear()
          )
        ) {
          console.log('week found');
          console.log('returning habit', { habit });
          return habit;
        }
        console.log('week not found');
        console.log('returning habit', { habit });
        habit.data.push(this.createHabitDataWeek(date));
        return habit;
      });
      console.log({ result });
      return result;
    } catch (err) {
      console.log('in error');
      return habits;
    }
  }

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
    console.log({ habitColors });
    if (habitColors.colorQueue.length === 0) {
      habitColors.colorQueue = [...habitColors.colors];
    }
    return habitColors.colorQueue.pop();
  }

  createHabitDataWeek(date) {
    console.log('creating data week');
    return {
      id: this.randomId(),
      weekNumber: moment(date).week(),
      year: date.getFullYear(),
      completed: Array(7).fill(false),
    };
  }

  createHabit(payload) {
    console.log('vreating ne habit');
    const date = new Date();
    this.create({
      ...payload,
      color: this.getHabitColor(),
      dateCreated: date,
      data: [this.createHabitDataWeek(date)],
    });
  }

  updateStored(payload) {
    localStorage.setItem(this.keyName, JSON.stringify(payload));
  }
}

export default new HabitRepo('habits');

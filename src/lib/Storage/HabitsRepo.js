import moment from 'moment';
import Repo from './Repo';

class HabitRepo extends Repo {
  constructor(keyName) {
    super(keyName);
    this.colors = ['#EBEE89', '#EE9FD3', '#8497E8', '#66F2E4', '#F08D8F'];
    this.colorQueue = [];
  }

  getHabitColor() {
    if (this.colorQueue.length === 0) {
      this.colorQueue = [...this.colors];
    }

    return this.colorQueue.pop();
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
    this.create({
      ...payload,
      color: this.getHabitColor(),
      dateCreated: date,
      data: [this.createHabitDataWeek(date)],
    });
  }
}

export default new HabitRepo('habits');

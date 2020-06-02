import moment from 'moment';
import Repo from './Repo';
import { enumerateDates, compareDateStrings } from '../../Utils/date';

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

  getCompletionData() {
    const habits = this.getAll();

    // generate averages for each habit for each week {year: week: [avg, avg, avg]}
    const averages = {};
    habits.forEach((habit) => {
      console.log(habit.title);
      habit.data.forEach((week) => {
        const completionTotal = week.completed.reduce((accum, day) => {
          if (day) {
            return accum + 1;
          }
          return accum;
        }, 0);
        console.log(week.number, completionTotal);
        if (!averages[week.year]) {
          averages[week.year] = {};
        }
        if (!averages[week.year][week.weekNumber]) {
          averages[week.year][week.weekNumber] = [];
        }

        averages[week.year][week.weekNumber].push(
          (completionTotal / habit.targetNumber) * 100
        );
      });
    });

    // iterate though each week and calc week avg then create new object {date:avg} ignore current week
    const result = [];
    const currentWeek = String(new moment().week());
    const currentYear = String(new moment().year());
    Object.entries(averages).forEach(([year, week]) => {
      Object.entries(week).forEach(([weekNumber, avgArray]) => {
        console.log({ year, weekNumber, currentYear, currentWeek });
        if (year === currentYear && weekNumber === currentWeek) {
          // do nothing
        } else {
          const weekSum = avgArray.reduce((accum, value) => {
            return accum + value;
          });
          const weekAverage = weekSum / avgArray.length;
          const startDate = moment(`${year}W${weekNumber}`);
          const endDate = moment(`${year}W${weekNumber}`).add(6, 'days');
          const weekDateList = enumerateDates(startDate, endDate);

          weekDateList.forEach((dateKey) => {
            result.push({ [dateKey]: weekAverage });
          });
        }
      });
    });

    // sort result array
    result.sort(compareDateStrings);

    // convert to x, y
    const habitCompletionData = { x: [], y: [] };
    result.forEach((day) => {
      const [date, value] = Object.entries(day)[0];
      habitCompletionData.x.push(date);
      habitCompletionData.y.push(value);
    });
    console.log({ habitCompletionData });
    return habitCompletionData;
  }
}

export default new HabitRepo('habits');

import Moment from 'moment';
import Repo from './Repo';
import { enumerateDates } from '../../Utils/date';

class MorningRoutineRepo extends Repo {
  getRatingData() {
    const records = this.getAll();
    // make valuehash and dateArray
    const valueHash = {};
    const dateArray = [];
    records.default.forEach((record) => {
      const date = record.date.split('T')[0];
      valueHash[date] = record.data.ratings;
      dateArray.push(date);
    });

    // create full date array
    const firstDate = new Moment(dateArray[0]);
    const lastDate = new Moment(dateArray[dateArray.length - 1]);
    const y = enumerateDates(firstDate, lastDate);

    const x = {};

    y.forEach((date) => {
      // check if values exist, if so copy, if not fill with 1
      try {
        const data = valueHash[date];
        Object.entries(data).forEach(([key, value]) => {
          if (!x[key]) {
            x[key] = [value];
          } else {
            x[key].push(value);
          }
        });
      } catch (error) {
        Object.keys(x).forEach((key) => {
          x[key].push(1);
        });
      }
    });

    return { x, y };
  }
}

export default new MorningRoutineRepo('morningRoutine');

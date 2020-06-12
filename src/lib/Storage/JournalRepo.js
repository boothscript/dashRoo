import moment from 'moment';
import Repo from './Repo';
import { enumerateDates, sortRecordsByDate } from '../../Utils/date';

class JournalRepo extends Repo {
  getRatingData() {
    const records = this.getAll();

    // make valuehash and dateArray
    const valueHash = {};
    const dateArray = [];

    records.forEach((record) => {
      const date = record.date.split('T')[0];
      valueHash[date] = record.data.morning;
      dateArray.push(date);
    });
    // create full date array
    dateArray.sort(sortRecordsByDate);
    const firstDate = dateArray[0];
    const lastDate = dateArray[dateArray.length - 1];
    const x = enumerateDates(firstDate, lastDate);

    const y = {};

    x.forEach((date) => {
      // check if values exist, if so copy, if not fill with 1
      try {
        const data = valueHash[date];
        Object.entries(data).forEach(([key, value]) => {
          if (!y[key]) {
            y[key] = [value || 1];
          } else {
            y[key].push(value || 1);
          }
        });
      } catch (error) {
        Object.keys(y).forEach((key) => {
          y[key].push(1);
        });
      }
    });
    return { x, y };
  }
}

export default new JournalRepo('journal');

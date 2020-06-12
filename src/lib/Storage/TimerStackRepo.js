import Moment from 'moment';
import { enumerateDates, sortRecordsByDate } from '../../Utils/date';
import Repo from './Repo';

class TimerStackRepo extends Repo {
  getStackValues() {
    const records = this.getAll();
    const dateArray = [];
    const stackCounts = [];
    records.forEach((record) => {
      dateArray.push(record.date.split('T')[0]);
      stackCounts.push(
        record.data.sessionArr ? record.data.sessionArr.length : 0
      );
    });

    dateArray.sort(sortRecordsByDate);

    // create full date array
    const firstDate = new Moment(dateArray[0]);
    const lastDate = new Moment(dateArray[dateArray.length - 1]);
    const x = enumerateDates(firstDate, lastDate);

    const y = x.map((date) => {
      const index = dateArray.indexOf(date);

      if (index === -1) {
        return 0;
      }
      return stackCounts[index];
    });

    return { x, y };
  }
}

export default new TimerStackRepo('timerStack');

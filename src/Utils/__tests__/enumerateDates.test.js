import Moment from 'moment';
import { enumerateDates } from '../date';

test('enumerateDates function', () => {
  const firstDate = new Moment('2020-04-17');
  const lastDate = new Moment('2020-04-21');
  const result = enumerateDates(firstDate, lastDate);
  expect(result).toStrictEqual([
    '2020-04-17',
    '2020-04-18',
    '2020-04-19',
    '2020-04-20',
    '2020-04-21',
  ]);
});

import moment from 'moment';

export function compareDates(date1, date2) {
  // compares two date objects and ignores time. returns bool.
  return date1.toDateString() === date2.toDateString();
}

export function enumerateDates(firstDate, lastDate) {
  console.log({ firstDate, lastDate });
  const result = [];
  let currentDate = moment(firstDate);
  result.push(currentDate.format('YYYY-MM-DD'));
  while (!currentDate.isSame(lastDate, 'day')) {
    currentDate = currentDate.add(1, 'days');

    result.push(currentDate.format('YYYY-MM-DD'));
  }

  return result;
}

export function compareDateStrings(a, b) {
  if (moment(a).isBefore(b)) {
    return -1;
  }
  return +1;
}

export const monthFullNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function createWeekArray(date) {
  // given on date (moment), creates an array of dates for that week (sun - sat)
  let dateCopy;
  try {
    dateCopy = moment(date.format());
  } catch (error) {
    if (error instanceof TypeError) {
      dateCopy = moment(date);
    } else {
      throw new Error(error);
    }
  }

  return enumerateDates(moment(dateCopy.day(0)), moment(dateCopy.day(6)));
}

export function sortRecordsByDate(dateA, dateB) {
  const momentA = moment(dateA);
  const momentB = moment(dateB);
  console.log({ momentA, momentB });
  console.log(momentA.isBefore(momentB, 'day'));
  return momentA.isBefore(momentB) ? -1 : 1;
}

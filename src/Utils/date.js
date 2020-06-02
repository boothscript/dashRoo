import moment from 'moment';

export function compareDates(date1, date2) {
  // compares two date objects and ignores time. returns bool.
  return date1.toDateString() === date2.toDateString();
}

export function enumerateDates(firstDate, lastDate) {
  const result = [];
  let currentDate = firstDate;
  result.push(currentDate.format('YYYY-MM-DD'));
  while (currentDate.format('YYYY-MM-DD') !== lastDate.format('YYYY-MM-DD')) {
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

export default function compareDates(date1, date2) {
  // compares two date objects and ignores time. returns bool.
  return date1.toDateString() === date2.toDateString();
}



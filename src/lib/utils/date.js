function compareDates(date1, date2) {
  // compares two date objects and ignores time. returns bool.
  console.log("dates", typeof date1, typeof date2);
  return date1.toDateString() && date2.toDateString();
}

export { compareDates };

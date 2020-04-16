function compareDates(date1, date2) {
  // compares two date objects and ignores time. returns bool.
  console.log("dates", date1, date2);
  return date1.toDateString() === date2.toDateString();
}

export { compareDates };

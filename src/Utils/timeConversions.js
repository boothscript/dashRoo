function convertToDisplayTime(time) {
  const mins = `${Math.floor(time / 1000 / 60)}`;
  const seconds = `${Math.floor(time / 1000) % 60}`;
  return `${mins.padStart(2, 0)}:${seconds.padStart(2, 0)}`;
}

function displayTimeToMs(time) {
  const [mins, secs] = time.split(':');

  let result = 0;
  result += Math.min(parseInt(mins, 10), 99) * 60 * 1000;
  result += Math.min(parseInt(secs, 10), 59) * 1000;
  return result;
}

export { convertToDisplayTime, displayTimeToMs };

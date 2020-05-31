export function calculate7DayRollingMean(valuesArray) {
  const rollingAverage = valuesArray.map((value, index) => {
    let sample;
    if (index < 6) {
      sample = valuesArray.slice(0, index + 1);
    } else {
      sample = valuesArray.slice(index - 6, index + 1);
    }

    const sum = sample.reduce((accum, currentValue) => accum + currentValue);
    return sum / sample.length;
  });

  return rollingAverage;
}

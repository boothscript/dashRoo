export function calculate7DayRollingMean(valuesArray) {
  const rollingAverage = valuesArray.map((value, index) => {
    let sample;
    if (index < 6) {
      sample = valuesArray.slice(0, index + 1);
    } else {
      sample = valuesArray.slice(index - 6, index + 1);
    }

    const sum = sample.reduce((accum, currentValue) => accum + currentValue);
    // look for zero days in sample and remove 2 max.
    let count = 0;
    const filteredSample = sample.filter((value) => {
      if (value === 0) {
        count++;
      }
      return value > 0 || count > 2;
    });
    return sum / filteredSample.length;
  });

  return rollingAverage;
}

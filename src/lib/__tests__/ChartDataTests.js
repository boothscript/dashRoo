/* eslint-disable no-underscore-dangle */
import MorningRoutineRepo from '../Storage/MornigRoutineRepo';

import * as routineData1 from './mockData.js/routineData1.json';
import * as routineData2 from './mockData.js/routineData2.json';

test('repo method returns x and y values for rating', () => {
  // set local storage
  localStorage.__STORE__.morningRoutine = JSON.stringify(routineData1);

  const result = MorningRoutineRepo.getRatingData();

  expect(result).toStrictEqual({
    x: { day: [3, 4, 4, 3, 4], sleep: [3, 3, 3, 5, 4] },
    y: ['2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21'],
  });
});

test('handles repo with missing days', () => {
  // set local storage
  localStorage.__STORE__.morningRoutine = JSON.stringify(routineData2);

  const result = MorningRoutineRepo.getRatingData();

  expect(result).toStrictEqual({
    x: { day: [3, 1, 1, 1, 4], sleep: [3, 1, 1, 1, 4] },
    y: ['2020-04-17', '2020-04-18', '2020-04-19', '2020-04-20', '2020-04-21'],
  });
});

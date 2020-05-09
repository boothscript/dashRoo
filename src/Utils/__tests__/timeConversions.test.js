import { displayTimeToMs } from '../timeConversions';

describe('time conversion tests', () => {
  test('Converts 00:00 correctly', () => {
    expect(displayTimeToMs('00:00')).toBe(0);
  });
  test('Converts 00:11 correctly', () => {
    expect(displayTimeToMs('00:11')).toBe(11000);
  });
  test('Rejects incorect format', () => {
    expect(displayTimeToMs('01')).toBe(NaN);
  });
});

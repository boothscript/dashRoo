import HabitsRepo from '../Storage/HabitsRepo';

test('tests color picker', () => {
  const color1 = HabitsRepo.getHabitColor();
  const color2 = HabitsRepo.getHabitColor();

  expect(color1).not.toEqual(color2);
});

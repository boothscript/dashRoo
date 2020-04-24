import HabitsRepo from '../Storage/HabitsRepo';

test('tests color picker', function () {
  const color1 = HabitsRepo.getHabitColor();
  const color2 = HabitsRepo.getHabitColor();
  console.log(color1, color2);
  expect(color1).not.toEqual(color2);
});

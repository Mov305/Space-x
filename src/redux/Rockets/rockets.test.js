import { reserveRocket } from '.';

test('should return the id of the rocket', () => {
  expect(reserveRocket(5).payload).toBe(5);
});

test('should return the type of the action', () => {
  expect(reserveRocket(5).type).toBe('RESERVE_ROCKET');
});

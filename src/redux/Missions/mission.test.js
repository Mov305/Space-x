import { reserveMission } from '.';

test('should return the id of the mission', () => {
  expect(reserveMission(6).payload).toBe(6);
});

test('should return the type of the action', () => {
  expect(reserveMission(6).type).toBe('RESERVE_MISSION');
});

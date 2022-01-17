// test/leetcode/739-daily-temperatures.test.ts
import { dailyTemperatures } from '../../code/leetcode/739-daily-temperatures';

describe('test function dailyTemperatures:', () => {
  test('test case temperatures = [73,74,75,71,69,72,76,73]', () => {
    const expected = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
    expect(expected).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  test('test case temperatures = [30,40,50,60]', () => {
    const expected = dailyTemperatures([30, 40, 50, 60]);
    expect(expected).toEqual([1, 1, 1, 0]);
  });

  test('test case temperatures = [30,60,90]', () => {
    const expected = dailyTemperatures([30, 60, 90]);
    expect(expected).toEqual([1, 1, 0]);
  });
});

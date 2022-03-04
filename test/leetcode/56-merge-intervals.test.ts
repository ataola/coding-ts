// test/leetcode/56-merge-intervals.test.ts
// [[1,4],[2,3]]
import { merge } from '../../code/leetcode/56-merge-intervals';

describe('test function merge:', () => {
  test('test case [[1,4],[2,3]]', () => {
    const expected = merge([
      [1, 4],
      [2, 3],
    ]);
    expect(expected).toEqual([[1, 4]]);
  });

  test('test case [[1,3],[2,4]]', () => {
    const expected = merge([
      [1, 3],
      [2, 4],
    ]);
    expect(expected).toEqual([[1, 4]]);
  });
});

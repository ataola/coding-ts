// test/leetcode/77-combinations.test.ts
import combine from '../../code/leetcode/77-combinations';

describe('test function combine:', () => {
  test('test case n = 4, k = 2', () => {
    const expected = combine(4, 2);
    expect(expected).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });

  test('test case n = 1, k = 1', () => {
    const expected = combine(1, 1);
    expect(expected).toEqual([[1]]);
  });
});

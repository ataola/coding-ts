// test/leetcode/78-subsets.test.ts
import subsets from '../../code/leetcode/78-subsets';

describe('test function subsets:', () => {
  test('test case nums = [1,2,3]', () => {
    const expected = subsets([1, 2, 3]);
    expect(expected).toEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]);
  });

  test('test case nums = [0]', () => {
    const expected = subsets([0]);
    expect(expected).toEqual([[], [0]]);
  });
});

// test/leetcode/46-permutations.test.ts
import permute from '../../code/leetcode/46-permutations';

describe('test function permute:', () => {
  test('test case nums = [1,2,3]', () => {
    const expected = permute([1, 2, 3]);
    expect(expected).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });

  test('test case nums = [0,1]', () => {
    const expected = permute([0, 1]);
    expect(expected).toEqual([
      [0, 1],
      [1, 0],
    ]);
  });

  test('test case nums = [1]', () => {
    const expected = permute([1]);
    expect(expected).toEqual([[1]]);
  });
});

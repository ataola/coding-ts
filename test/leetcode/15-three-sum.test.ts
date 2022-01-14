// test/leetcode/15-three-sum.test.ts
import { threeSum } from '../../code/leetcode/15-three-sum';

describe('test function threeSum:', () => {
  test('test case nums = [-1,0,1,2,-1,-4]', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = threeSum(nums);
    expect(expected).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test('test case nums = []', () => {
    const nums: number[] = [];
    const expected = threeSum(nums);
    expect(expected).toEqual([]);
  });

  test('test case nums = [0]', () => {
    const nums = [0];
    const expected = threeSum(nums);
    expect(expected).toEqual([]);
  });
});

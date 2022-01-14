// test/leetcode/88-merge-sorted-array.test.ts
import { merge } from '../../code/leetcode/88-merge-sorted-array';

describe('test function merge:', () => {
  test('test case nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
    const num1 = [1, 2, 3, 0, 0, 0];
    const num2 = [2, 5, 6];
    merge(num1, 3, num2, 3);
    expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test('test case nums1 = [1], m = 1, nums2 = [], n = 0', () => {
    const num1 = [1];
    const num2: number[] = [];
    merge(num1, 1, num2, 0);
    expect(num1).toEqual([1]);
  });

  test('test case nums1 = [0], m = 0, nums2 = [1], n = 1', () => {
    const num1 = [0];
    const num2 = [1];
    merge(num1, 0, num2, 1);
    expect(num1).toEqual([1]);
  });
});

// test/leetcode/1.two-sum.test.ts
import { twoSum1, twoSum2 } from '../../code/leetcode/1-two-sum'


describe('test function twoSum1:', () => {
  test('test case nums = [2,7,11,15], target = 9', () => {
    const data = twoSum1([2, 7, 11, 15], 9);
    expect(data).toEqual([0, 1]);
  });

  test('test case nums = [3,2,4], target = 6', () => {
    const data = twoSum1([3, 2, 4], 6);
    expect(data).toEqual([1, 2]);
  });

  test('test case nums = [3, 3], target = 6', () => {
    const data = twoSum1([3, 3], 6);
    expect(data).toEqual([0, 1]);
  });
});



describe('test function twoSum2:', () => {
  test('test case nums = [2,7,11,15], target = 9', () => {
    const data = twoSum2([2, 7, 11, 15], 9);
    expect(data).toEqual([0, 1]);
  });

  test('test case nums = [3,2,4], target = 6', () => {
    const data = twoSum2([3, 2, 4], 6);
    expect(data).toEqual([1, 2]);
  });

  test('test case nums = [3, 3], target = 6', () => {
    const data = twoSum2([3, 3], 6);
    expect(data).toEqual([0, 1]);
  });
});


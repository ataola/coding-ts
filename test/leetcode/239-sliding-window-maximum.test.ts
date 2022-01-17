// test/leetcode/59-sliding-window-maximum.test.ts
// https://leetcode-cn.com/submissions/detail/259563302/testcase/
// https://leetcode-cn.com/submissions/detail/259569553/testcase/
import maxSlidingWindow from '../../code/leetcode/239-sliding-window-maximum';

describe('test function maxSlidingWindow:', () => {
  test('test case nums = [1,3,-1,-3,5,3,6,7], k = 3', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });

  test('test case nums = [1,-1], k = 1', () => {
    expect(maxSlidingWindow([1, -1], 1)).toEqual([1, -1]);
  });

  test('test case [9,11], k = 2', () => {
    expect(maxSlidingWindow([9, 11], 2)).toEqual([11]);
  });

  test('test case nums = [4,-2], k = 2', () => {
    expect(maxSlidingWindow([4, -2], 2)).toEqual([4]);
  });
});

// test/leetcode/35-search-insert-position.test.ts
import { searchInsert } from '../../code/leetcode/35-search-insert-position';

describe('test function searchInsert: ', () => {
  test('test case nums = [1,3,5,6], target = 5', () => {
    const res = searchInsert([1, 3, 5, 6], 5);
    expect(res).toBe(2);
  });

  test('test case nums = [1,3,5,6], target = 2', () => {
    const res = searchInsert([1, 3, 5, 6], 2);
    expect(res).toBe(1);
  });
});

// test/leetcode/322-coin-change.test.ts
import { coinChange } from '../../code/leetcode/322-coin-change';

describe('test function coinChange:', () => {
  test('test case coins = [1, 2, 5], amount = 11', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3);
  });
});

// test/leetcode/70-climbing-stairs.test.ts
import { climbStairs, climbStairs2 } from '../../code/leetcode/70-climbing-stairs';

describe('test function climbStairs', () => {
  test('test case n = 5', () => {
    expect(climbStairs(5)).toBe(8);
  });
});

describe('test function climbStairs2', () => {
  test('test case n = 5', () => {
    expect(climbStairs2(5)).toBe(8);
  });
});

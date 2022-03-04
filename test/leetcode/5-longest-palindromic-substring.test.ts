// test/leetcode/5-longest-palindromic-substring.test.ts
import { longestPalindrome } from '../../code/leetcode/5-longest-palindromic-substring';

describe('test function longestPalindrome: ', () => {
  test('test case s = "babad"', () => {
    const res = longestPalindrome('babad');
    expect(res).toBe('bab');
  });

  test('test case s = "cbbd"', () => {
    const res = longestPalindrome('cbbd');
    expect(res).toBe('bb');
  });
});

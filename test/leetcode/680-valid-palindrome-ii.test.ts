// test/leetcode/680-valid-palindrome-ii.test.ts
import { validPalindrome } from '../../code/leetcode/680-valid-palindrome-ii';

describe('test function validPalindrome:', () => {
  test('test case s = "aba"', () => {
    const expected = validPalindrome('aba');
    expect(expected).toBe(true);
  });

  test('test case s = "abca"', () => {
    const expected = validPalindrome('abca');
    expect(expected).toBe(true);
  });

  test('test case s = "abc"', () => {
    const expected = validPalindrome('abc');
    expect(expected).toBe(false);
  });
});

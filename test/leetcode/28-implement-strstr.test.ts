// test/leetcode/28-implement-strstr.test.ts
import { strStr } from '../../code/leetcode/28-implement-strstr';

describe('test function strStr:', () => {
  test('test case haystack = "hello", needle = "ll" target = 2', () => {
    const data = strStr('hello', 'll');
    expect(data).toEqual(2);
  });

  test('test case haystack = "aaaaa", needle = "bba" target = -1', () => {
    const data = strStr('aaaaa', 'bba');
    expect(data).toEqual(-1);
  });

  test('test case haystack = "", needle = "" target = -1', () => {
    const data = strStr('', '');
    expect(data).toEqual(0);
  });

  test('test case haystack = "a", needle = "a" target = 0', () => {
    const data = strStr('a', 'a');
    expect(data).toEqual(0);
  });
});

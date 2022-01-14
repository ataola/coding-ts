// test/leetcode/8-string-to-integer-atoi.test.ts

import { myAtoi } from '../../code/leetcode/8-string-to-integer-atoi';

describe('test function myAtoi: ', () => {
  test('test case s = "42"', () => {
    const res = myAtoi('42');
    expect(res).toBe(42);
  });

  test('test case s = " -42"', () => {
    const res = myAtoi(' -42');
    expect(res).toBe(-42);
  });

  test('test case s = "4193 with words"', () => {
    const res = myAtoi('4193 with words');
    expect(res).toBe(4193);
  });

  test('test case s = "words and 987"', () => {
    const res = myAtoi('words and 987');
    expect(res).toBe(0);
  });

  test('test case s = "-91283472332"', () => {
    const res = myAtoi('-91283472332');
    expect(res).toBe(-2147483648);
  });
});

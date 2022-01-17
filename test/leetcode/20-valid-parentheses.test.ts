// test/leetcode/20-valid-parentheses.test.ts
import { isValid } from '../../code/leetcode/20-valid-parentheses';

describe('test function isValid:', () => {
  test('test case s = "()"', () => {
    const data = isValid('()');
    expect(data).toBe(true);
  });

  test('test case s = "()[]{}"', () => {
    const data = isValid('()[]{}');
    expect(data).toBe(true);
  });

  test('test case s = "([)]"', () => {
    const data = isValid('([)]');
    expect(data).toBe(false);
  });

  test('test case s = "{[]}"', () => {
    const data = isValid('{[]}');
    expect(data).toBe(true);
  });
});

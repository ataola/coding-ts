// test/leetcode/151-reverse-words-in-a-string.test.ts
import { reverseWords } from '../../code/leetcode/151-reverse-words-in-a-string';

describe('test class reverseWords:', () => {
  test('test case s = "the sky is blue"', () => {
    expect(reverseWords('the sky is blue')).toEqual('blue is sky the');
  });

  test('test case s = "  hello world  "', () => {
    expect(reverseWords('  hello world  ')).toEqual('world hello');
  });

  test('test case s = "  Bob    Loves  Alice   "', () => {
    expect(reverseWords('  Bob    Loves  Alice   ')).toEqual('Alice Loves Bob');
  });

  test('test case s = "Alice does not even like bob"', () => {
    expect(reverseWords('Alice does not even like bob')).toEqual('bob like even not does Alice');
  });
});

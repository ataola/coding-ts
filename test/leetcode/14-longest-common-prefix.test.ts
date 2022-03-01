// test/leetcode/14-longest-common-prefix.test.ts
import { longestCommonPrefix } from '../../code/leetcode/14-longest-common-prefix';

describe('test function longestCommonPrefix:', () => {
  test('test case strs = ["flower","flow","flight"] target = "fl"', () => {
    const data = longestCommonPrefix(['flower', 'flow', 'flight']);
    expect(data).toEqual('fl');
  });

  test('test case strs = ["dog","racecar","car"] target = ""', () => {
    const data = longestCommonPrefix(['dog', 'racecar', 'car']);
    expect(data).toEqual('');
  });
});

// code/leetcode/1-longest-common-prefix.ts 最长公共前缀 https://leetcode-cn.com/problems/longest-common-prefix/
/**
 *
 * @param {string[]} strs
 * @return {string}
 */
export function longestCommonPrefix(strs: string[]): string {
  if (!strs || strs.length === 0) {
    return '';
  }
  const len = strs.length;
  let res = strs[0];
  for (let i = 1; i < len; i++) {
    res = getPrefix(res, strs[i]);
  }
  return res;
}

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {string}
 */
function getPrefix(str1: string, str2: string): string {
  let index = 0;
  const minLen = Math.min(str1.length, str2.length);
  while (index < minLen && str1[index] === str2[index]) {
    index++;
  }
  return str1.substring(0, index);
}

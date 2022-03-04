// code/leetcode/28-implement-strstr.ts

/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0;
  }

  let res = -1;
  const len = needle.length;
  for (let i = 0; i <= haystack.length - len; i++) {
    if (haystack.substr(i, len) === needle) {
      res = i;
      break;
    }
  }
  return res;
}

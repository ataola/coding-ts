// code/leetcode/string-to-integer-atoi.ts

/**
 *
 * @param {string} s
 * @return { number }
 */
export function myAtoi(s: string): number {
  const reg = /\s*([-\+]?[0-9]*).*/;
  const groups = s.match(reg);
  // 没仔细看题目 用这个题目要求是 2^32那个区间，唉偷懒都不让
  // const max = Number.MAX_SAFE_INTEGER;
  // const min = Number.MIN_SAFE_INTEGER;
  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;
  let res = 0;
  if (groups) {
    res = +groups[1];
    if (isNaN(res)) {
      res = 0;
    }
  }
  return res < min ? min : res > max ? max : res;
}

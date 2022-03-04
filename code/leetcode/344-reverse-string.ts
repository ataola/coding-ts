// code/leetcode/344-reverse-string.ts
/**
 *
 * @param {string[]} s
 * @return {void}
 */
export function reverseString(s: string[]): void {
  const right = s.length - 1;
  const mid = Math.floor(right >> 1);
  for (let i = 0; i <= mid; i++) {
    [s[i], s[right - i]] = [s[right - i], s[i]];
  }
}

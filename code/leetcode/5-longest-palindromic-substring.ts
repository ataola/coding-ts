// code/leetcode/5-longest-palindromic-substring.ts
/**
 * 
 * @param {string} s 
 * @returns {string}
 */
export function longestPalindrome(s: string): string {
  const len = s.length;
  if (len < 2) {
    return s;
  }

  let maxLen = 1;
  let begin = 0;

  const dp: boolean[][] = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(true);
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (s[i] !== s[j]) {
        dp[j][i] = false;
      } else {
        dp[j][i] = i - j + 1 <= 3 || dp[j + 1][i - 1];
      }

      if (dp[j][i] && i - j + 1 > maxLen) {
        maxLen = i - j + 1;
        begin = j;
      }
    }
  }
  return s.substr(begin, maxLen);
}

// code/leetcode/680-valid-palindrome-ii.ts

/**
 *
 * @param {string} s
 * @return {boolean}
 */
export function validPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  if (isPalindrome(i + 1, j)) {
    return true;
  }

  if (isPalindrome(i, j - 1)) {
    return true;
  }

  function isPalindrome(left: number, right: number) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  return false;
}

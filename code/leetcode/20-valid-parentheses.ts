// code/leetcode/20-valid-parentheses.ts
declare type objectStringType = {
  [x: string]: string;
};
/**
 *
 * @param {string} s
 * @return {boolean}
 */
export function isValid(s: string): boolean {
  if (!s) {
    return true;
  }

  const map: objectStringType = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  const len = s.length;
  for (let i = 0; i < len; i++) {
    const ch = s[i];
    if (['(', '{', '['].includes(ch)) {
      stack.push(map[ch]);
    } else {
      if (!stack.length || stack.pop() !== ch) {
        return false;
      }
    }
  }
  return !stack.length;
}

// code/leetcode/151-reverse-words-in-a-string.ts
// API solution
// function reverseWords(s: string): string {
//   return s.match(/(\w+)/g).reverse().join(' ');
// };

/**
 *
 * @param {string} s
 * @return {string}
 */
export function reverseWords(s: string): string {
  const stack = [];
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      str += s[i];
    } else {
      if (str) {
        stack.unshift(str);
      }
      str = '';
    }
  }
  if (str) {
    stack.unshift(str);
  }
  return stack.join(' ');
}

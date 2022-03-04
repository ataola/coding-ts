// test/leetcode/344-reverse-string.test.ts
// ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]

import { reverseString } from '../../code/leetcode/344-reverse-string';

describe('test function reverseString:', () => {
  test('test case coins = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]', () => {
    let s = [
      'A',
      ' ',
      'm',
      'a',
      'n',
      ',',
      ' ',
      'a',
      ' ',
      'p',
      'l',
      'a',
      'n',
      ',',
      ' ',
      'a',
      ' ',
      'c',
      'a',
      'n',
      'a',
      'l',
      ':',
      ' ',
      'P',
      'a',
      'n',
      'a',
      'm',
      'a',
    ];
    let s2 = [
      'a',
      'm',
      'a',
      'n',
      'a',
      'P',
      ' ',
      ':',
      'l',
      'a',
      'n',
      'a',
      'c',
      ' ',
      'a',
      ' ',
      ',',
      'n',
      'a',
      'l',
      'p',
      ' ',
      'a',
      ' ',
      ',',
      'n',
      'a',
      'm',
      ' ',
      'A',
    ];
    reverseString(s)
    expect(s).toEqual(s2);
  });
});

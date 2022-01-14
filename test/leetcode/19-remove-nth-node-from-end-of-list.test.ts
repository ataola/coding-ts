// test/leetcode/19-remove-nth-node-from-end-of-list.test.ts

import ListNode from '../../code/base/list-node';
import makeListNodes from '../../code/utils/make-list-nodes';
import { removeNthFromEnd } from '../../code/leetcode/19-remove-nth-node-from-end-of-list';

describe('test function removeNthFromEnd:', () => {
  test('test case head = [1,2,3,4,5], n = 2', () => {
    const head = makeListNodes([1, 2, 3, 4, 5]);
    const expected = makeListNodes([1, 2, 3, 5]);
    expect(removeNthFromEnd(head, 2)).toEqual(expected);
  });

  test('test case [1], n = 1', () => {
    const head = makeListNodes([1]);
    const expected = null;
    expect(removeNthFromEnd(head, 1)).toEqual(expected);
  });

  test('test case [1, 2], n = 1', () => {
    const head = makeListNodes([1, 2]);
    const expected = makeListNodes([1]);
    expect(removeNthFromEnd(head, 1)).toEqual(expected);
  });
});

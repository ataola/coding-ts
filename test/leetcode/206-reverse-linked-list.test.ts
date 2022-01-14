// test/leetcode/206-reverse-linked-list.test.ts
import ListNode from '../../code/base/list-node';
import makeListNodes from '../../code/utils/make-list-nodes';
import { reverseList } from '../../code/leetcode/206-reverse-linked-list';

describe('test function reverseList:', () => {
  test('test case head = [1, 2, 3, 4, 5]', () => {
    const head = makeListNodes([1, 2, 3, 4, 5]);
    const expected = makeListNodes([5, 4, 3, 2, 1]);
    expect(reverseList(head)).toEqual(expected);
  });

  test('test case head = [1, 2]', () => {
    const head = makeListNodes([1, 2]);
    const expected = makeListNodes([2, 1]);
    expect(reverseList(head)).toEqual(expected);
  });

  test('test case head = []', () => {
    const head = makeListNodes([]);
    const expected = makeListNodes([]);
    expect(reverseList(head)).toEqual(expected);
  });
});

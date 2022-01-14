// /test/code/21-merge-two-sorted-lists.test.ts

import ListNode from '../../code/base/list-node';
import { mergeTwoLists } from '../../code/leetcode/21-merge-two-sorted-lists';

describe('test function mergeTwoLists:', () => {
  test('test case l1 = [], l2 = []', () => {
    const l1 = new ListNode();
    const l2 = new ListNode();
    const expected = new ListNode();
    expected.next = new ListNode();
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  });

  test('test case l1 = [], l2 = [0]', () => {
    const l1 = new ListNode();
    const l2 = new ListNode(0);
    const expected = new ListNode();
    expected.next = new ListNode(0);
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  });

  test('test case l1 = [1,2,4], l2 = [1,3,4]', () => {
    // 人肉造数据
    const l1 = new ListNode(1);
    const l12 = new ListNode(2);
    const l13 = new ListNode(4);
    l1.next = l12;
    l12.next = l13;

    const l2 = new ListNode(1);
    const l22 = new ListNode(3);
    const l23 = new ListNode(4);
    l2.next = l22;
    l22.next = l23;

    const expected = new ListNode(1);
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(4);
    const n5 = new ListNode(4);
    expected.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  });
});

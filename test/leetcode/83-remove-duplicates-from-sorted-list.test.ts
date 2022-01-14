// test/leetcode/83-remove-duplicates-from-sorted-list.test.ts
import ListNode from '../../code/base/list-node';
import { deleteDuplicates } from '../../code/leetcode/83-remove-duplicates-from-sorted-list';

describe('test function deleteDuplicates:', () => {
  test('test case head = [1,1,2]', () => {
    const head = new ListNode(1);
    const h2 = new ListNode(1);
    const h3 = new ListNode(2);
    head.next = h2;
    h2.next = h3;

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  test('test case head = [1,1,2,3,3]', () => {
    const head = new ListNode(1);
    const h2 = new ListNode(1);
    const h3 = new ListNode(2);
    const h4 = new ListNode(3);
    const h5 = new ListNode(3);
    head.next = h2;
    h2.next = h3;
    h3.next = h4;
    h4.next = h5;

    const expected = new ListNode(1);
    expected.next = new ListNode(2);
    expected.next.next = new ListNode(3);
    expect(deleteDuplicates(head)).toEqual(expected);
  });
});

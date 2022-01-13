// code/leetcode/21-merge-two-sorted-lists.ts

import ListNode from '../base/list-node';

/**
 * 
 * @param {ListNode} list1 
 * @param {ListNode} list2 
 * @returns {ListNode | null }
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let cur = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 ? list1 : list2;
  return head.next;
}

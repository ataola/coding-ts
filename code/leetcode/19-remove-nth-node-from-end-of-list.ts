// code/leetcode/19-remove-nth-node-from-end-of-list.ts
import ListNode from "../base/list-node";

/**
 * 
 * @param {ListNode | null} head 
 * @param {number} n 
 * @returns {ListNode | null}
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  while (n) {
    fast = fast.next as ListNode;
    n--
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next as ListNode;
  }

  slow.next = (slow.next as ListNode).next;

  return dummy.next;
};
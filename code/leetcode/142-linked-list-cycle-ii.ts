// code/leetcode/142-linked-list-cycle-ii.ts
import ListNode from '../base/list-node';

/**
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  let slow = isCycle(head);
  if (!slow) {
    return null;
  }
  let fast = head;
  while (fast !== slow) {
    fast = (fast as ListNode).next;
    slow = (slow as ListNode).next;
  }
  return fast;
}

/**
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function isCycle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = (slow as ListNode).next;
    if (fast === slow) {
      return slow;
    }
  }
  return null;
}

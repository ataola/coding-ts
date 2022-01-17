// code/leetcode/141-linked-list-cycle.ts
import ListNode from '../base/list-node';
/**
 *
 * @param {ListNode | null} head
 * @return {boolean}
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return false;
  }

  let slow = head;
  let fast = head.next;
  while (fast !== slow) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;
  }
  return true;
}

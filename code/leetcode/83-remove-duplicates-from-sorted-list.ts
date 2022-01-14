// code/leetcode/83-remove-duplicates-from-sorted-list.ts
import ListNode from '../base/list-node';
/**
 *
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}

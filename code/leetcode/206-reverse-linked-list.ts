// code/leetcode/206-reverse-linked-list.ts
import ListNode from '../base/list-node';

/**
 *
 * @param {ListNode | null} head
 * @return { ListNode | null}
 */

export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

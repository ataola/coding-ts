// code/leetcode/92-reverse-linked-list-ii.ts
import ListNode from '../base/list-node';

/**
 *
 * @param {ListNode | null} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode | null}
 */
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let pre, cur, leftHead;
  const dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  for (let i = 0; i < left - 1; i++) {
    p = p.next as ListNode;
  }
  leftHead = p;

  const start = leftHead.next as ListNode;
  pre = start;
  cur = (pre as ListNode).next as ListNode;

  for (let i = left; i < right; i++) {
    const next = cur.next as ListNode;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  leftHead.next = pre;
  start.next = cur;

  return dummy.next;
}

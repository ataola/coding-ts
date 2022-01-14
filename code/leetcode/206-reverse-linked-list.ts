// code/leetcode/206-reverse-linked-list.ts
import ListNode from "../base/list-node";

/**
 * 
 * @param {ListNode | null} head
 * @returns { ListNode | null} 
 */

export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
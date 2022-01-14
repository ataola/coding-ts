// code/utils/make-list-nodes.ts
import ListNode from '../base/list-node';

/**
 *
 * @param {number[]} arr
 * @returns {ListNode}
 */
export default function makeListNodes(arr: number[]): ListNode {
  if (arr.length === 0) {
    return new ListNode();
  } else if (arr.length === 1) {
    return new ListNode(arr[0]);
  } else if (arr.length === 2) {
    const head = new ListNode(arr[0]);
    head.next = new ListNode(arr[1]);
    return head;
  }

  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
}

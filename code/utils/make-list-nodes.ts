// code/utils/make-list-nodes.ts
import ListNode from '../base/list-node';

/**
 *
 * @param {number[]} arr
 * @return {ListNode}
 */
export default function makeListNodes(arr: number[]): ListNode {
  if (arr.length === 0) {
    return new ListNode();
  } else if (arr.length === 1) {
    return new ListNode(arr[0]);
  }

  const head = new ListNode(arr[0]);
  let cur = head;
  for (let i = 1; i < arr.length; i++) {
    cur.next = new ListNode(arr[i]);
    cur = cur.next;
  }
  return head;
}

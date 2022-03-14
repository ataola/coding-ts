/**
 * Definition for doubly-linked list.
 */
export default class DoublyListNode {
  val: number;
  prev: DoublyListNode | null;
  next: DoublyListNode | null;
  constructor(val?: number, prev?: DoublyListNode | null, next?: DoublyListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}

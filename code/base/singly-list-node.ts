/**
 * Definition for singly-linked list.
 */
export default class SinglyListNode {
  val: number;
  next: SinglyListNode | null;
  constructor(val?: number, next?: SinglyListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

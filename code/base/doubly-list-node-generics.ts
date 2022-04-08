import { paramsType } from './type';
/**
 * Definition for doubly-linked list.
 */
export default class DoublyListNode<T extends paramsType> {
  val: T | undefined;
  prev: DoublyListNode<T> | null;
  next: DoublyListNode<T> | null;
  constructor(val?: T, prev?: DoublyListNode<T> | null, next?: DoublyListNode<T> | null) {
    this.val = val;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}

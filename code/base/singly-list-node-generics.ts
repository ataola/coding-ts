import { paramsType } from './type'

/**
 * Definition for singly-linked list.
 */
export default class SinglyListNode<T extends paramsType> {
  val: T | undefined;
  next: SinglyListNode<T> | null;
  constructor(val?: T, next?: SinglyListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

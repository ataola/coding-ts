import { paramsType } from './type';
import SinglyListNode from './singly-list-node-generics';

export class SinglyLinkedList<T extends paramsType> {
  dummy: SinglyListNode<T>;
  length: number;
  constructor() {
    this.dummy = new SinglyListNode<T>();
    this.length = 0;
  }

  /**
   * @description 获取链表中第 index 个结点的值。如果索引无效，则返回undefined。
   * @param {number} index
   * @return {T | undefined}
   */
  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let cur: SinglyListNode<T> = this.dummy;
    while (index >= 0) {
      cur = cur.next!;
      index--;
    }

    return cur.val;
  }

  /**
   * @description 在链表的第一个元素之前添加一个值为 val 的结点。插入后，新结点将成为链表的第一个结点。
   * @param {T} val
   * @return {void}
   */
  addAtHead(val: T): void {
    const cur = this.dummy.next;
    const singlyListNode = new SinglyListNode<T>(val, cur);
    this.dummy.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 将值为 val 的结点追加到链表的最后一个元素。
   * @param {T} val
   * @return {void}
   */
  addAtTail(val: T): void {
    const singlyListNode = new SinglyListNode<T>(val);
    let cur: SinglyListNode<T> = this.dummy;
    while (cur && cur.next) {
      cur = cur.next;
    }
    cur.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 在链表中的第 index 个结点之前添加值为 val  的结点。如果 index 等于链表的长度，则该结点将附加到链表的末尾。如果 index 大于链表长度，则不会插入结点。如果index小于0，则在头部插入结点。
   * @param {number} index
   * @param {T} val
   * @return {void}
   */
  addAtIndex(index: number, val: T): void {
    if (index <= 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else if (index > this.length) {
      // do nothing
    } else {
      let cur: SinglyListNode<T> = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      const singlyListNode = new SinglyListNode<T>(val, cur.next);
      cur.next = singlyListNode;
      this.length++;
    }
  }

  /**
   * @description 如果索引 index 有效，则删除链表中的第 index 个结点。
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {
    if (index >= 0 || index < this.length) {
      let cur = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      if (cur && cur.next) {
        cur.next = cur.next.next;
        this.length--;
      }
    }
  }

  /**
   * @description 获取整个链表
   * @returns {SinglyListNode<T>}
   */
  getLinkedList(): SinglyListNode<T> {
    return this.dummy;
  }

  /**
   * @description 转成字符串
   * @return {string}
   */
  toString(): string {
    let res = '';
    let cur: SinglyListNode<T> | null = this.dummy.next;
    if (!cur) {
      return res;
    } else {
      while (cur) {
        res = `${res}, ${cur.val}`;
        cur = cur.next!;
      }
    }
    return res.slice(2);
  }
}

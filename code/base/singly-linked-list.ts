import SinglyListNode from './singly-list-node';
export class SinglyLinkedList {
  dummy: SinglyListNode;
  length: number;
  constructor() {
    this.dummy = new SinglyListNode();
    this.length = 0;
  }

  /**
   * @description 获取链表中第 index 个结点的值。如果索引无效，则返回-1。
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let cur: SinglyListNode = this.dummy;
    while (index >= 0) {
      cur = cur.next!;
      index--;
    }

    return cur.val;
  }

  /**
   * @description 在链表的第一个元素之前添加一个值为 val 的结点。插入后，新结点将成为链表的第一个结点。
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: number): void {
    const cur = this.dummy.next;
    const singlyListNode = new SinglyListNode(val, cur);
    this.dummy.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 将值为 val 的结点追加到链表的最后一个元素。
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: number): void {
    const singlyListNode = new SinglyListNode(val);
    let cur: SinglyListNode = this.dummy;
    while (cur && cur.next) {
      cur = cur.next;
    }
    cur.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 在链表中的第 index 个结点之前添加值为 val  的结点。如果 index 等于链表的长度，则该结点将附加到链表的末尾。如果 index 大于链表长度，则不会插入结点。如果index小于0，则在头部插入结点。
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else if (index > this.length) {
      // do nothing
    } else {
      let cur: SinglyListNode = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      const singlyListNode = new SinglyListNode(val, cur.next);
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
   * @return {SinglyListNode}
   */
  getLinkedList(): SinglyListNode {
    return this.dummy;
  }

  /**
   * @description 转成字符串
   * @return {string}
   */
  toString(): string {
    let res = '';
    let cur: SinglyListNode | null = this.dummy.next;
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

/**
 * Your SinglyLinkedList object will be instantiated and called as such:
 * var obj = new SinglyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// https://leetcode-cn.com/submissions/detail/282942880/
// ["MyLinkedList","addAtTail","get"]
// [[],[1],[0]]

// https://leetcode-cn.com/submissions/detail/282968867/
// ["MyLinkedList","addAtHead","get","addAtHead","addAtHead","deleteAtIndex","addAtHead","get","get","get","addAtHead","deleteAtIndex"]
// [[],[4],[1],[1],[5],[3],[7],[3],[3],[3],[1],[4]]
// const myLinkedList = new SinglyLinkedList();
// myLinkedList.addAtHead(4);
// myLinkedList.get(1);
// myLinkedList.addAtHead(1);
// myLinkedList.addAtHead(5);
// myLinkedList.deleteAtIndex(4);
// console.log(myLinkedList.getLinkedList())

// https://leetcode-cn.com/submissions/detail/283015850/
// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get","get","deleteAtIndex","deleteAtIndex","get","deleteAtIndex","get"]
// [[],[1],[3],[1,2],[1],[1],[1],[3],[3],[0],[0],[0],[0]]
// const obj = new SinglyLinkedList();
// const param = obj.get(0);
// console.log('param', param);
// obj.addAtHead(1);
// obj.addAtTail(2);
// obj.addAtIndex(1, 3);
// obj.deleteAtIndex(2);
// console.log('toString:', obj.toString());

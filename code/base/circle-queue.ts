export class MyCircularQueue {
  data: number[];
  head: number;
  tail: number;
  maxSize: number;
  constructor(k: number) {
    this.data = new Array(k);
    this.head = -1;
    this.tail = -1;
    this.maxSize = k;
  }

  /**
   * @description  向循环队列插入一个元素。如果成功插入则返回真。如果入队前是空的，则将head 和 tail 都向右移一位，也就是下标为0的地方; 否则只需右移tail
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.head++;
      this.tail++;
      this.data[this.tail] = value;
    } else {
      this.tail = (this.tail + 1) % this.maxSize;
      this.data[this.tail] = value;
    }
    return true;
  }

  /**
   * @description 从循环队列中删除一个元素。如果成功删除则返回真。如果出队时队列不为空且为最后一个元素(head == tail)，则置head = tail = -1, 否则只需右移head
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    delete this.data[this.head];
    if (this.head === this.tail) {
      this.head = this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.maxSize;
    }
    return true;
  }

  /**
   * @description 从队首获取元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.head];
  }

  /**
   * @description  获取队尾元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.tail];
  }

  /**
   * @description 检查循环队列是否为空。head = tail = -1;
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.head === this.tail && this.head === -1;
  }

  /**
   * @description 检查循环队列是否已满。
   * @return {boolean}
   */
  isFull(): boolean {
    return (this.tail + 1) % this.maxSize === this.head;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// https://leetcode-cn.com/submissions/detail/285255747/
// 输入：
// ["MyCircularQueue","enQueue","Rear","Rear","deQueue","enQueue","Rear","deQueue","Front","deQueue","deQueue","deQueue"]
// [[6],[6],[],[],[],[5],[],[],[],[],[],[]]
// 输出：
// [null,true,-1,-1,false,true,5,true,-1,false,false,false]
// 预期结果：
// [null,true,6,6,true,true,5,true,-1,false,false,false]

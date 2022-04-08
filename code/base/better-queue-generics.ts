import { paramsType, stateType } from './type';

export class BetterQueue<T extends paramsType> {
  data: stateType<T>;
  head: number;
  tail: number;

  constructor() {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }

  /**
   * @description 入队操作
   * @param {T} element
   * @return {boolean}
   */
  enQueue(element: T): boolean {
    this.data[this.tail] = element;
    this.tail++;
    return true;
  }

  /**
   * @description 出队操作
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head++;
    return true;
  }

  /**
   * @description 返回队头元素
   * @return {T|undefined}
   */
  peek(): T | undefined {
    return this.data[this.head];
  }

  /**
   * @description 判断是否为空
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.getLength() === 0;
  }

  /**
   * @description 获取队列长度
   * @return {number}
   */
  getLength(): number {
    return this.tail - this.head;
  }

  /**
   * @description 转字符串输出
   * @returns
   */
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${this.data[this.head]}`;
    for (let i = this.head + 1; i < this.tail; i++) {
      str = `${str}, ${this.data[i]}`;
    }
    return str;
  }

  /**
   * @description 清空队列
   */
  clear(): void {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }
}

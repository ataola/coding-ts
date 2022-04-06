import { paramsType } from './type';

export class Queue<T extends paramsType> {
  data: T[];
  head: number;
  length: number;

  constructor() {
    this.data = [];
    this.head = 0;
    this.length = 0;
  }

  /**
   * @description 入队操作
   * @param {T} element
   * @return {boolean}
   */
  enQueue(element: T): boolean {
    this.data.push(element);
    this.length++;
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
    this.length--;
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
    return this.length;
  }

  /**
   * @description 转字符串输出
   * @returns
   */
  toString(): string {
    let str = '';
    for (let i = 0; i < this.length; i++) {
      str = `${str}, ${this.data[this.head + i]}`;
    }
    return str;
  }

  /**
   * @description 清空队列
   */
  clear(): void {
    this.data = [];
    this.head = 0;
    this.length = 0;
  }
}

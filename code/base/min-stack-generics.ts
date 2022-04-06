import { paramsType } from './type';

export class MinStack<T extends paramsType> {
  minStack: T[];
  dataStack: T[];
  constructor() {
    this.minStack = [];
    this.dataStack = [];
  }

  /**
   * @description 将元素val推入堆栈。
   * @param {T} val
   * @return {void}
   */
  push(val: T): void {
    this.dataStack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else if (this.minStack[this.minStack.length - 1] >= val) {
      this.minStack.push(val);
    }
  }

  /**
   * @description  删除堆栈顶部的元素。
   * @return {void}
   */
  pop(): void {
    if (this.minStack[this.minStack.length - 1] === this.dataStack.pop()) {
      this.minStack.pop();
    }
  }

  /**
   * @description 获取堆栈顶部的元素。
   * @return {T}
   */
  top(): T {
    return this.dataStack[this.dataStack.length - 1];
  }

  /**
   * @description 获取堆栈中的最小元素。
   * @return {T}
   */
  getMin(): T {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

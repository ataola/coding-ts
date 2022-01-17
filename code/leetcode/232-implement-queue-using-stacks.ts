// code/leetcode/232-implement-queue-using-stacks.ts
export default class MyQueue {
  stack1: number[];
  stack2: number[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number {
    if (this.stack2.length <= 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop() as number);
      }
    }

    return this.stack2.pop() as number;
  }

  peek(): number {
    if (this.stack2.length <= 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop() as number);
      }
    }

    const len = this.stack2.length;
    return len && this.stack2[len - 1];
  }

  empty(): boolean {
    return !this.stack1.length && !this.stack2.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

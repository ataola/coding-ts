// code/leetcode/151-min-stack.ts
export default class MinStack {
  data: number[];
  constructor() {
    this.data = [];
  }

  push(val: number): void {
    this.data.push(val);
  }

  pop(): void {
    this.data.pop();
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  getMin(): number {
    return Math.min.apply(this, this.data);
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

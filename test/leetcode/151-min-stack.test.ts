// test/leetcode/151-min-stack.test.ts
import MinStack from '../../code/leetcode/151-min-stack';

describe('test class MinStack:', () => {
  test('test case ["MinStack","push","push","push","getMin","pop","top","getMin"], [[],[-2],[0],[-3],[],[],[],[]]', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3); // --> 返回 -3.
    minStack.pop();
    expect(minStack.top()).toBe(0); // --> 返回 0.
    expect(minStack.getMin()).toBe(-2); // --> 返回 -2.
  });
});

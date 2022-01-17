// test/leetcode/232-implement-queue-using-stacks.test.ts
import MyQueue from '../../code/leetcode/232-implement-queue-using-stacks';

describe('test class MyQueue:', () => {
  test('test case ["MyQueue", "push", "push", "peek", "pop", "empty"] [[], [1], [2], [], [], []]', () => {
    const myQueue = new MyQueue();
    myQueue.push(1); // queue is: [1]
    myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
    expect(myQueue.peek()).toBe(1); // return 1
    expect(myQueue.pop()).toBe(1); // return 1, queue is [2]
    expect(myQueue.empty()).toBe(false); // return false
  });
});

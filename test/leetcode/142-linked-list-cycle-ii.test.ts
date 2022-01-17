// test/leetcode/142-linked-list-cycle-ii.test.ts
import ListNode from '../../code/base/list-node';
import { detectCycle } from '../../code/leetcode/142-linked-list-cycle-ii';

describe('test function detectCycle:', () => {
  test('test case head = [3,2,0,-4], pos = 1', () => {
    const head = new ListNode(3);
    const h1 = new ListNode(2);
    const h2 = new ListNode(0);
    const h3 = new ListNode(4);
    head.next = h1;
    h1.next = h2;
    h2.next = h3;
    h3.next = h1;
    expect(detectCycle(head)).toBe(h1);
  });
});

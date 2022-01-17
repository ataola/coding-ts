// test/leetcode/141-linked-list-cycle.test.ts
// [-1,-7,7,-4,19,6,-9,-5,-2,-5]
// 6
// https://leetcode-cn.com/submissions/detail/259382077/testcase/

import ListNode from "../../code/base/list-node";
import { hasCycle } from "../../code/leetcode/141-linked-list-cycle";

describe('test function hasCycle:', () => {
  test('test case head = [3,2,0,-4], pos = 1', () => {
    const head = new ListNode(3);
    const h1 = new ListNode(2);
    const h2 = new ListNode(0);
    const h3 = new ListNode(4);
    head.next = h1;
    h1.next = h2;
    h2.next = h3;
    h3.next = h1;
    expect(hasCycle(head)).toBe(true);
  });
});
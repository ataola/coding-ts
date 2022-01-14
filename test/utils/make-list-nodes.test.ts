// test/utils/make-list-nodes.test.ts
import ListNode from '../../code/base/list-node';
import makeListNodes from '../../code/utils/make-list-nodes';

describe('test function makeListNodes:', () => {
  test('test case arr = [1, 2, 3, 4, 5]', () => {
    const expected = new ListNode(1)
    const l1 = new ListNode(2);
    const l2 = new ListNode(3);
    const l3 = new ListNode(4);
    const l4 = new ListNode(5);
    expected.next = l1;
    l1.next = l2;
    l2.next = l3;
    l3.next = l4;
    expect(makeListNodes([1, 2, 3, 4, 5])).toEqual(expected);
  });
});
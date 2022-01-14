// test/leetcode/82-remove-duplicates-from-sorted-list-ii.test.ts
import ListNode from '../../code/base/list-node';
import makeListNodes from '../../code/utils/make-list-nodes';
import { deleteDuplicates } from '../../code/leetcode/82-remove-duplicates-from-sorted-list-ii';

describe('test function deleteDuplicates:', () => {
  test('test case head = [1,1,2]', () => {
    const head = makeListNodes([1, 2, 3, 3, 4, 4, 5]);
    const expected = makeListNodes([1, 2, 5]);
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  test('test case head = [1,1,1,2,3]', () => {
    const head = makeListNodes([1, 1, 1, 2, 3]);
    const expected = makeListNodes([2, 3]);
    expect(deleteDuplicates(head)).toEqual(expected);
  });
});

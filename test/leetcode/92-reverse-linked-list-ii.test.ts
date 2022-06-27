// test/leetcode/92-reverse-linked-list-ii.test.ts
import makeListNodes from '../../code/utils/make-list-nodes';
import { reverseBetween } from '../../code/leetcode/92-reverse-linked-list-ii';

describe('test function reverseBetween:', () => {
  test('test case head = [1,2,3,4,5], left = 2, right = 4', () => {
    const head = makeListNodes([1, 2, 3, 4, 5]);
    const expected = makeListNodes([1, 4, 3, 2, 5]);
    expect(reverseBetween(head, 2, 4)).toEqual(expected);
  });

  test('test case head = [5], left = 1, right = 1', () => {
    const head = makeListNodes([5]);
    const expected = makeListNodes([5]);
    expect(reverseBetween(head, 1, 1)).toEqual(expected);
  });
});

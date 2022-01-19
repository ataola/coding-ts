// test/leetcode/108-convert-sorted-array-to-binary-search-tree.test.ts
import TreeNode from '../../code/base/tree-node';
import { sortedArrayToBST } from '../../code/leetcode/108-convert-sorted-array-to-binary-search-tree';

describe('test function sortedArrayToBST:', () => {
  test('test case nums = [-10,-3,0,5,9]', () => {
    const node_10 = new TreeNode(-10, null, null);
    const node5 = new TreeNode(5, null, null);
    const node_3 = new TreeNode(-3, node_10, null);
    const node9 = new TreeNode(9, node5, null);
    const expected = new TreeNode(0, node_3, node9);
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(expected);
  });
});

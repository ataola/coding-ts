// test/leetcode/110-balanced-binary-tree.test.ts
import TreeNode from '../../code/base/tree-node';
import { isBalanced } from '../../code/leetcode/110-balanced-binary-tree';

describe('test function isBalanced:', () => {
  test('test case root = [3,9,20,null,null,15,7]', () => {
    const node7 = new TreeNode(7, null, null);
    const node15 = new TreeNode(15, null, null);
    const node20 = new TreeNode(20, node15, node7);
    const node9 = new TreeNode(9, null, null);
    const root = new TreeNode(3, node9, node20);
    expect(isBalanced(root)).toEqual(true);
  });
});

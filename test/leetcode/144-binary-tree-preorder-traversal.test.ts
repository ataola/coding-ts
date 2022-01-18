// test/leetcode/144-binary-tree-preorder-traversal.test.ts
import TreeNode from '../../code/base/tree-node';
import { preorderTraversal } from '../../code/leetcode/144-binary-tree-preorder-traversal';

describe('test function preorderTraversal:', () => {
  test('test case root = [1,null,2,3]', () => {
    const root3 = new TreeNode(3, null, null);
    const root2 = new TreeNode(2, root3, null);
    const root = new TreeNode(1, null, root2);
    expect(preorderTraversal(root)).toEqual([1, 2, 3]);
  });
});

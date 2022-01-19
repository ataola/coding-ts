// test/leetcode/226-invert-binary-tree.test.ts
import TreeNode from '../../code/base/tree-node';
import { invertTree } from '../../code/leetcode/226-invert-binary-tree';

describe('test function invertTree:', () => {
  test('test case root = [3,9,20,null,null,15,7]', () => {
    const node1 = new TreeNode(1, null, null);
    const node3 = new TreeNode(3, null, null);
    const node2 = new TreeNode(2, node1, node3);
    const node6 = new TreeNode(6, null, null);
    const node9 = new TreeNode(9, null, null);
    const node7 = new TreeNode(7, node6, node9);
    const root = new TreeNode(4, node2, node7);

    const e1 = new TreeNode(1, null, null);
    const e3 = new TreeNode(3, null, null);
    const e6 = new TreeNode(6, null, null);
    const e9 = new TreeNode(9, null, null);
    const e2 = new TreeNode(2, e3, e1);
    const e7 = new TreeNode(7, e9, e6);
    const expected = new TreeNode(4, e7, e2);
    expect(invertTree(root)).toEqual(expected);
  });
});

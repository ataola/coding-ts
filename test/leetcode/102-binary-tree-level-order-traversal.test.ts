// test/leetcode/102-binary-tree-level-order-traversal.test.ts
// https://leetcode-cn.com/submissions/detail/260107699/
// 输入：
// [1,2,null,3,null,4,null,5]
// 输出：
// [[1],[2,3],[4,5]]
// 预期结果：
// [[1],[2],[3],[4],[5]]

// https://leetcode-cn.com/submissions/detail/260140752/
// 输入：
// [0,2,4,1,null,3,-1,5,1,null,6,null,8]
// 输出：
// [[],[2,4],[1,3,-1],[5,1,6,8]]
// 预期结果：
// [[0],[2,4],[1,3,-1],[5,1,6,8]]

import TreeNode from '../../code/base/tree-node';
import { levelOrder } from '../../code/leetcode/102-binary-tree-level-order-traversal';

describe('test function levelOrder:', () => {
  test('test case root = [3,9,20,null,null,15,7]', () => {
    const node7 = new TreeNode(7, null, null);
    const node15 = new TreeNode(15, null, null);
    const node20 = new TreeNode(20, node15, node7);
    const node9 = new TreeNode(9, null, null);
    const root = new TreeNode(3, node9, node20);
    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });
});

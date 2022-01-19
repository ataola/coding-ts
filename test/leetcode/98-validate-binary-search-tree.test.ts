// test/leetcode/98-validate-binary-search-tree.test.ts
// https://leetcode-cn.com/submissions/detail/260187127/
// 输入：
// [5,4,6,null,null,3,7]
// 输出：
// true
// 预期结果：
// false

// https://leetcode-cn.com/submissions/detail/260193583/
// 输入：
// [32,26,47,19,null,null,56,null,27]
// 输出：
// true
// 预期结果：
// false
import TreeNode from '../../code/base/tree-node';
import { isValidBST } from '../../code/leetcode/98-validate-binary-search-tree';

describe('test function isValidBST:', () => {
  test('test case root = [5,4,6,null,null,3,7]', () => {
    const node4 = new TreeNode(4, null, null);
    const node3 = new TreeNode(3, null, null);
    const node7 = new TreeNode(7, null, null);
    const node6 = new TreeNode(6, node3, node7);
    const root = new TreeNode(5, node4, node6);
    expect(isValidBST(root)).toBe(false);
  });
});

// code/leetcode/110-balanced-binary-tree.ts
import TreeNode from '../base/tree-node';
/**
 *
 * @param {TreeNode | null} root
 * @return {boolean}
 */
export function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  if (Math.abs(dfs(root.left) - dfs(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);

  function dfs(node: TreeNode | null) {
    if (!node) {
      return 0;
    }
    const left: number = dfs(node.left);
    const right: number = dfs(node.right);
    return Math.max(left, right) + 1;
  }
}

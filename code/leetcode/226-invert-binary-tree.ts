// code/leetcode/226-invert-binary-tree.ts
import TreeNode from '../base/tree-node';
/**
 *
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }

  function dfs(node: TreeNode | null) {
    if (node) {
      const left = node.left;
      const right = node.right;
      node.left = right;
      node.right = left;
      dfs(node.left);
      dfs(node.right);
    }
  }

  dfs(root);
  return root;
}

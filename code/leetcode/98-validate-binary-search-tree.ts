// code/leetcode/98-validate-binary-search-tree.ts
import TreeNode from '../base/tree-node';
/**
 *
 * @param {TreeNode | null} root
 */
export function isValidBST(root: TreeNode | null): boolean {
  const arr: number[] = [];

  function inOrder(node: TreeNode | null) {
    if (!node) {
      return;
    }
    inOrder(node.left);
    arr.push(node.val);
    inOrder(node.right);
  }

  inOrder(root);

  if (arr.length < 2) {
    return true;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else {
      return false;
    }
  }

  return true;
}

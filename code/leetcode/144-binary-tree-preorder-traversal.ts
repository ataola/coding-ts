// code/leetcode/144-binary-tree-preorder-traversal.ts
import TreeNode from '../base/tree-node';
/**
 *
 * @param {TreeNode | null} root
 * @return {number[]}
 */
export function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  function preOrder(treeNode: TreeNode | null) {
    if (!treeNode) {
      return;
    }
    res.push(treeNode.val);
    preOrder(treeNode.left);
    preOrder(treeNode.right);
  }

  preOrder(root);

  return res;
}

/**
 *
 * @param {TreeNode | null} root
 * @return {number[]}
 */
export function preorderTraversal2(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [root as TreeNode];

  while (stack.length > 0) {
    const cur = stack.pop();
    if (cur && cur.val !== null) {
      res.push(cur.val);
    }
    cur?.right && stack.push(cur.right);
    cur?.left && stack.push(cur.left);
  }

  return res;
}

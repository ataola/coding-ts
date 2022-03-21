import TreeNode from './tree-node';

function inorder(root: TreeNode | null, res: number[]) {
  if (root === null) {
    return;
  }
  if (root.left) {
    inorder(root.left, res);
  }
  res.push(root.val);
  if (root.right) {
    inorder(root.right, res);
  }
}

export function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  inorder(root, res);
  return res;
}

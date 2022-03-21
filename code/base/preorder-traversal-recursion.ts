import TreeNode from './tree-node';

function preorder(root: TreeNode | null, res: number[]) {
  if (root === null) {
    return;
  }
  res.push(root.val);
  preorder(root.left, res);
  preorder(root.right, res);
}

export function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  preorder(root, res);
  return res;
}

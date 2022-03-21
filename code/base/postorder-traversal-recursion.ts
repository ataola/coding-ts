import TreeNode from './tree-node';

function postorder(root: TreeNode | null, res: number[]) {
  if (root === null) {
    return;
  }

  if (root.left) {
    postorder(root.left, res);
  }

  if (root.right) {
    postorder(root.right, res);
  }

  res.push(root.val);
}

export function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (root === null) {
    return res;
  }
  postorder(root, res);
  return res;
}

import TreeNode from './tree-node';

export function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: any[] = [];

  if (root === null) {
    return res;
  }

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    const cur = stack.pop();
    res.push(cur.val);
    root = cur.right;
  }

  return res;
}

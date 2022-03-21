import TreeNode from './tree-node';

export function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: any[] = [];

  if (!root) {
    return res;
  }
  stack.push(root);

  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.val);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return res;
}

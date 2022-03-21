import TreeNode from './tree-node';

export function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: any[] = [];

  if (root === null) {
    return res;
  }

  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();
    if (cur) {
      stack.push(cur);
      stack.push(null);
      if (cur.right) {
        stack.push(cur.right);
      }
      if (cur.left) {
        stack.push(cur.left);
      }
    } else {
      res.push(stack.pop().val);
    }
  }

  return res;
}

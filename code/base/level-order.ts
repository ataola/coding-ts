import TreeNode from './tree-node';

export function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  const queue: any[] = [];
  if (root === null) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const len: number = queue.length;
    const arr: number[] = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      arr.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(arr);
  }
  return res;
}

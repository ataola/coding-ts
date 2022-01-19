// code/leetcode/102-binary-tree-level-order-traversal.ts
import TreeNode from '../base/tree-node';
/**
 *
 * @param {TreeNode | null} root
 * @return {number[][]}
 */
export function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];
  if (!root) {
    return res;
  }
  const queue: TreeNode[] = [root];
  const arr: number[] = [];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift() as TreeNode;
      arr.push(cur.val);
      if (cur?.left) {
        queue.push(cur.left);
      }
      if (cur?.right) {
        queue.push(cur.right);
      }
    }
    res.push(arr.slice());
    arr.length = 0;
  }
  return res;
}

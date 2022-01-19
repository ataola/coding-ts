// code/leetcode/108-convert-sorted-array-to-binary-search-tree.ts
import TreeNode from '../base/tree-node';
/**
 *
 * @param {TreeNode | null} nums
 * @return {TreeNode | null}
 */
export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  const middle = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middle], null, null);
  root.left = sortedArrayToBST(nums.slice(0, middle));
  root.right = sortedArrayToBST(nums.slice(middle + 1));
  return root;
}

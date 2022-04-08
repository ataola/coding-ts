import { paramsType } from './type';
/**
 * Definition for a binary tree node.
 */
// export default class TreeNode<T> {
//   val: T | undefined;
//   left: TreeNode<T> | null;
//   right: TreeNode<T> | null;
//   constructor(val?: T | undefined, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
//     this.val = val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

/**
 * Definition for a binary tree node.
 */
export default class TreeNode<T extends paramsType> {
  val: T | undefined;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(val?: T | undefined, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

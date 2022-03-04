// code/leetcode/1991-find-the-middle-index-in-array.ts

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
export function findMiddleIndex(nums: number[]): number {
  const len = nums.length;

  if (len === 1 || sum(nums, 1, len - 1) === 0) {
    return 0;
  }

  for (let i = 1; i < len; i++) {
    const leftSum = sum(nums, 0, i - 1);
    const rightSum = sum(nums, i + 1, len - 1);
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
}

/**
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function sum(arr: number[], left: number, right: number): number {
  let res = 0;
  for (let i = left; i <= right; i++) {
    res += arr[i];
  }
  return res;
}

// code/sort/merge.ts
/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function quick(nums: number[]): number[] {
  const mid = nums.length >> 2;

  function dfs(left: number, right: number) {
    for (let i = left; i < right; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
  }

  dfs(0, mid);
  dfs(mid, nums.length - 1);
  return nums;
}

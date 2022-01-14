// code/leetcode/1-two-sum.ts 两数之和 https://leetcode-cn.com/problems/two-sum/
/**
 * O(N^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | undefined}
 */
export function twoSum1(nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
/**
 * O(N)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[] | undefined}
 */
export function twoSum2(nums: number[], target: number): number[] | undefined {
  const map: any = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
}

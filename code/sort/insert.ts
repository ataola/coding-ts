// code/sort/insert.ts
/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function insert(nums: number[]): number[] {
  if (nums.length < 2) {
    return nums;
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
        break;
      }
    }
  }
  return nums;
}

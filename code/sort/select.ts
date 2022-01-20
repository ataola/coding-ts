// code/sort/select.ts
/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function select(nums: number[]): number[] {
  let minIndex;
  for (let i = 0; i < nums.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
    }
  }
  return nums;
}

// code/sort/bubble.ts
/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function bubble(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function bubble2(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let flag = true;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = false;
      }
    }
    if (flag) {
      return nums;
    }
  }
  return nums;
}

/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function bubble3(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let flag = true;

  while (left < right) {
    for (let i = left; i < right; i++) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        flag = false;
      }
    }
    if (flag) {
      return nums;
    }
    right--;
    for (let i = right; i > left; i--) {
      if (nums[i] < nums[i - 1]) {
        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
      }
    }
    left++;
  }

  return nums;
}

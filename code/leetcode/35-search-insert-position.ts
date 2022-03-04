// code/leetcode/35-search-insert-position.ts
export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = left + Math.floor((right - left) >> 1);
  while (left <= right) {
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
    mid = left + Math.floor((right - left) >> 1);
  }
  return mid + 1;
}

// code/leetcode/88-merge-sorted-array.ts 合并两个有序数组 https://leetcode-cn.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  while (j >= 0) {
    nums1[k] = nums2[j]
    j--;
    k--;
  }
};


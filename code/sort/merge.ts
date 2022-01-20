// code/sort/merge.ts

/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
export function merge(nums: number[]): number[] {
  const len = nums.length;
  if (len <= 1) {
    return nums;
  }

  const mid = len >> 1;

  const leftNums = merge(nums.slice(0, mid));
  const rightNums = merge(nums.slice(mid, len));
  return toOne(leftNums, rightNums);

  function toOne(nums1: number[], nums2: number[]): number[] {
    let i = 0;
    let j = 0;
    const len1 = nums1.length;
    const len2 = nums2.length;
    const res: number[] = [];
    while (i < len1 && j < len2) {
      if (nums1[i] < nums2[j]) {
        res.push(nums1[i]);
        i++;
      } else {
        res.push(nums2[j]);
        j++;
      }
    }

    if (i < len1) {
      return res.concat(nums1.slice(i));
    } else {
      return res.concat(nums2.slice(j));
    }
  }
}

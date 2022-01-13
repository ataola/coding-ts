// code/leetcode/15-three-sum.ts

/**
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
export function threeSum(nums: number[]): number[][] {
  const res: number[][] = [];

  if (nums.length < 3) {
    return res;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return res;
}

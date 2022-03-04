// code/leetcode/56-merge-intervals.ts
/**
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export function merge(intervals: number[][]): number[][] {
  let len = intervals.length;

  if (len === 1) {
    return intervals;
  }

  intervals.sort((a: number[], b: number[]) => a[0] - b[0]);

  for (let i = 0; i < len - 1; i++) {
    if (megreArr(intervals, i, i + 1)) {
      i--;
      len--;
    }
  }

  return intervals;
}

/**
 *
 * @param {number[][]} nums
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
function megreArr(nums: number[][], i: number, j: number): boolean {
  const [aLeft, aRight] = nums[i];
  const [bLeft, bRight] = nums[j];
  if (aRight >= bRight) {
    nums.splice(i, 2, [aLeft, aRight]);
    return true;
  } else if (aRight >= bLeft) {
    nums.splice(i, 2, [aLeft, bRight]);
    return true;
  }
  return false;
}

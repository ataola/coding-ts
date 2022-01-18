// code/leetcode/46-permutations.ts
/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const map = new Map();
  const cur: number[] = [];

  function dfs(nth: number) {
    if (nth === nums.length) {
      res.push(cur.slice());
    }

    for (let i = 0; i < nums.length; i++) {
      if (!map.get(nums[i])) {
        map.set(nums[i], 1);
        cur.push(nums[i]);
        dfs(nth + 1);
        cur.pop();
        map.set(nums[i], 0);
      }
    }
  }

  dfs(0);
  return res;
}

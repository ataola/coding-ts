// code/leetcode/78-subsets.ts
/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
export default function subsets(nums: number[]): number[][] {
  const res: number[][] = [];
  const cur: number[] = [];
  const len = nums.length;

  function dfs(index: number) {
    res.push(cur.slice());
    for (let i = index; i < len; i++) {
      cur.push(nums[i]);
      dfs(i + 1);
      cur.pop();
    }
  }

  dfs(0);
  return res;
}

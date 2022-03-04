// code/leetcode/77-combinations.ts

/**
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
export default function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const cur: number[] = [];

  function dfs(index: number) {
    if (cur.length === k) {
      res.push(cur.slice());
      return;
    }
    for (let i = index; i <= n; i++) {
      cur.push(i);
      dfs(i + 1);
      cur.pop();
    }
  }

  dfs(1);
  return res;
}

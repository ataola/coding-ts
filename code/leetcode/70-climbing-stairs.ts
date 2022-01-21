// code/leetcode/70-climbing-stairs.ts
/**
 * @description 记忆化搜索
 * @param {number} n
 * @return {number}
 */
export function climbStairs(n: number): number {
  const map = new Map();
  function dfs(n: number) {
    if (n <= 3) {
      return n;
    }
    if (!map.get(n)) {
      map.set(n, dfs(n - 1) + dfs(n - 2));
    }
    return map.get(n);
  }
  return dfs(n);
}

/**
 * @description 动态规划
 * @param {number} n
 * @return {number}
 */
export function climbStairs2(n: number): number {
  const arr: number[] = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

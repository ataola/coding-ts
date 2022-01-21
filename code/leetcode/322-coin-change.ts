// code/leetcode/322-coin-change.ts
/**
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export function coinChange(coins: number[], amount: number): number {
  const res: number[] = [];
  res[0] = 0;
  for (let i = 1; i <= amount; i++) {
    res[i] = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        res[i] = Math.min(res[i], res[i - coins[j]] + 1);
      }
    }
  }

  if (res[amount] === Number.MAX_SAFE_INTEGER) {
    return -1;
  }

  return res[amount];
}

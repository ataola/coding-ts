// code/leetcode/739-daily-temperatures.ts

/**
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
export function dailyTemperatures(temperatures: number[]): number[] {
  const len = temperatures.length;
  const res: number[] = new Array(len).fill(0);
  const stack: number[] = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const top = stack.pop();
      res[top as number] = i - (top as number);
    }
    stack.push(i);
  }
  return res;
}

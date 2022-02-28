// code/pat/b1001.ts 害死人不偿命的(3n+1)猜想 https://pintia.cn/problem-sets/994805260223102976/problems/994805325918486528
/**
 *
 * @param {number} num
 * @returns {number}
 */
export function solution(num: number): number {
  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num >> 1;
    } else {
      num = (3 * num + 1) >> 1;
    }
    count++;
  }
  return count;
}

// code/leetcode/59-sliding-window-maximum.ts

// 会超时
// /**
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let res: number[] = [];
//   let j = nums.length;
//   let i = j - k;
//   while (i >= 0) {
//     res.unshift(Math.max.apply(null, nums.slice(i, j)));
//     i--;
//     j--;
//   }
//   return res;
// };

// md又超时， 我算是知道了，难就难在超时
// /**
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let res: number[] = [];
//   let queue: number[] = [];
//   let j = nums.length;
//   let i = j - k;
//   while (i >= 0) {
//     if (queue.length === 0) {
//       queue = nums.slice(i, j)
//     } else {
//       queue.pop();
//       queue.unshift(nums[i]);
//     }
//     res.unshift(Math.max.apply(null, queue));
//     i--;
//     j--;
//   }
//   return res;
// };

// 又超时了 。。。。。。
// /**
//  *
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let res: number[] = [];
//   let queue: number[] = [];
//   let j = nums.length;
//   let i = j - k;
//   while (i >= 0) {
//     if (queue.length === 0) {
//       queue = nums.slice(i, j)
//     } else {
//       queue.pop();
//       queue.unshift(nums[i]);
//     }
//     res.unshift(calcMax(queue) as number);
//     i--;
//     j--;
//   }
//   return res;
// };

// function calcMax(arr: number[]) {
//   if (!arr || !arr.length) {
//     return;
//   }

//   let max = arr[0];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

/**
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export default function maxSlidingWindow(nums: number[], k: number): number[] {
  let res: number[] = [];
  let queue: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }

    queue.push(i);

    while (queue.length && queue[0] <= i - k) {
      queue.shift();
    }

    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }
  return res;
}

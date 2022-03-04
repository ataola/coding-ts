// test/leetcode/1991-find-the-middle-index-in-array.test.ts
import { findMiddleIndex } from '../../code/leetcode/1991-find-the-middle-index-in-array';

describe('test function findMiddleIndex:', () => {
  test('test case [-1,-1,-1,1,1,1]', () => {
    const data = findMiddleIndex([-1, -1, -1, 1, 1, 1]);
    expect(data).toEqual(-1);
  });

  test('test case [-1,-1,0,1,1,0]', () => {
    const data = findMiddleIndex([-1, -1, 0, 1, 1, 0]);
    expect(data).toEqual(5);
  });

  test('test case [-1,-1,1,1,0,0]', () => {
    const data = findMiddleIndex([-1, -1, 1, 1, 0, 0]);
    expect(data).toEqual(4);
  });
});

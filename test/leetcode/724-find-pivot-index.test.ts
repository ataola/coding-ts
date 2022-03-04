// test/leetcode/724-find-pivot-index.test.ts
import { pivotIndex } from '../../code/leetcode/724-find-pivot-index';

describe('test function pivotIndex:', () => {
  test('test case [-1,-1,-1,1,1,1]', () => {
    const data = pivotIndex([-1, -1, -1, 1, 1, 1]);
    expect(data).toEqual(-1);
  });

  test('test case [-1,-1,0,1,1,0]', () => {
    const data = pivotIndex([-1, -1, 0, 1, 1, 0]);
    expect(data).toEqual(5);
  });

  test('test case [-1,-1,1,1,0,0]', () => {
    const data = pivotIndex([-1, -1, 1, 1, 0, 0]);
    expect(data).toEqual(4);
  });
});

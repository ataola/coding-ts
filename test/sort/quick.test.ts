// test/sort/merge.test.ts
import { quick } from '../../code/sort/quick';

describe('test function quick:', () => {
  test('test case nums = [3, 1, 2, 5, 4]', () => {
    expect(quick([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('test case nums = [1, 2, 3, 4, 5]', () => {
    expect(quick([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

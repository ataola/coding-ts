// test/sort/merge.test.ts
import { merge } from '../../code/sort/merge';

describe('test function merge:', () => {
  test('test case nums = [3, 1, 2, 5, 4]', () => {
    expect(merge([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('test case nums = [1, 2, 3, 4, 5]', () => {
    expect(merge([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

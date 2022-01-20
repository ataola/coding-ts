// test/sort/insert.test.ts
import { insert } from '../../code/sort/insert';

describe('test function insert:', () => {
  test('test case nums = [3, 1, 2, 5, 4]', () => {
    expect(insert([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('test case nums = [1, 2, 3, 4, 5]', () => {
    expect(insert([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

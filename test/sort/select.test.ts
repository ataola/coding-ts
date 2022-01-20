// test/sort/select.test.ts
import { select } from '../../code/sort/select';
describe('test function select:', () => {
  test('test case nums = [3, 1, 2, 5, 4]', () => {
    expect(select([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('test case nums = [1, 2, 3, 4, 5]', () => {
    expect(select([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

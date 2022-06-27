// test/sum.test.ts
import sum from '../code/sum';

test('1 + 2 = 3', () => {
  let x = 1,
    y = 2;
  let expected = 3;

  let res: number = sum(x, y);

  expect(res).toBe(expected);
});

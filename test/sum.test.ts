// test/sum.test.ts
import sum from '../code/sum';

test('1 + 2 = 3', () => {
  let x: number = 1,
    y: number = 2;
  let expected: number = 3;

  let res: number = sum(x, y);

  expect(res).toBe(expected);
});

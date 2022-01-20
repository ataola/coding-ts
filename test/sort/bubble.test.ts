// test/sort/bubble.test.ts
import { bubble, bubble2, bubble3 } from '../../code/sort/bubble';

describe('test function bubble:', () => {
  test('test case nums = [3, 1, 2, 5, 4]', () => {
    expect(bubble([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('test case nums = [1, 2, 3, 4, 5]', () => {
    expect(bubble([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('test function bubble2:', () => {
  test('test case nums = [3, 1, 2, 5, 4]', () => {
    expect(bubble2([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('test case nums = [1, 2, 3, 4, 5]', () => {
    expect(bubble2([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('test function bubble3:', () => {
  test('test case nums = [3, 1, 2, 5, 4]', () => {
    expect(bubble3([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  test('test case nums = [1, 2, 3, 4, 5]', () => {
    expect(bubble3([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});

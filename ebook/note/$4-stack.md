# 栈

## 栈的基本概念

栈是一种后进先出（LIFO, Last In First Out）的数据结构，概况自维基百科。

生活中栈的例子也是一只手数不过来，比如说子弹压膛，最先进去的子弹总是最后再射击出来；再比如我们每次 debugger 的执行栈顺序；再比如勤工俭学的小郑去洗盘子，最先洗好的总是放在最下面，拿的时候总是后面才拿出来；这些都是栈的原理的运用。

## 栈的基本操作

在 Javascript 和 Typescript 中，"数组"天然自带栈的气质，平时开发直接拿来当栈用即可，所以在这里我们不如设计一个升级版"最小栈"。它支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

```typescript
export class MinStack {
  constructor() {}

  /**
   * @description 将元素val推入堆栈。
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {}

  /**
   * @description  删除堆栈顶部的元素。
   * @return {void}
   */
  pop(): void {}

  /**
   * @description 获取堆栈顶部的元素。
   * @return {number}
   */
  top(): number {}

  /**
   * @description 获取堆栈中的最小元素。
   * @return {number}
   */
  getMin(): number {}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

大体上的思路是需要一个栈去记录存入的所有数据，然后需要一个栈去记录最小站的数据，然后就是一顿劈里啪啦的写代码。

```typescript
class MinStack {
  minStack: number[];
  dataStack: number[];
  constructor() {
    this.minStack = [];
    this.dataStack = [];
  }
}
```

### 入栈

数据栈倒是无所谓，有数据来就往里面塞数据就好了，最小站这里要分类讨论，如果为空的话，放心塞就好了，如果不为空的话，那么比较最小栈的栈顶元素是不是比当前要插入的元素来的大或者持平，是的话那就将其塞入最小栈。

```typescript
  /**
   * @description 将元素val推入堆栈。
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.dataStack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else if (this.minStack[this.minStack.length - 1] >= val) {
      this.minStack.push(val);
    }
  }
```

### 出栈

数据栈倒是无所谓，有数据的话直接把栈顶的元素弹出去就好了， 这里最小栈的需要判断下，弹出去的元素是不是等于最小栈，是的话一并弹出去。

```typescript
 /**
   * @description  删除堆栈顶部的元素。
   * @return {void}
   */
  pop(): void {
    if (this.minStack[this.minStack.length - 1] === this.dataStack.pop()) {
      this.minStack.pop();
    }
  }
```

### 获取栈顶元素

直接返回数据栈数组的最后一个元素

```typescript
  /**
   * @description 获取堆栈顶部的元素。
   * @return {number}
   */
  top(): number {
    return this.dataStack[this.dataStack.length - 1];
  }
```

### 获取站内元素最小值

参考楼上的，那不就是返回最小栈数组的最后一个元素嘛

```typescript
/**
   * @description 获取堆栈中的最小元素。
   * @return {number}
   */
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
```

整体的代码如下：

```typescript
export class MinStack {
  minStack: number[];
  dataStack: number[];
  constructor() {
    this.minStack = [];
    this.dataStack = [];
  }

  /**
   * @description 将元素val推入堆栈。
   * @param {number} val
   * @return {void}
   */
  push(val: number): void {
    this.dataStack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else if (this.minStack[this.minStack.length - 1] >= val) {
      this.minStack.push(val);
    }
  }

  /**
   * @description  删除堆栈顶部的元素。
   * @return {void}
   */
  pop(): void {
    if (this.minStack[this.minStack.length - 1] === this.dataStack.pop()) {
      this.minStack.pop();
    }
  }

  /**
   * @description 获取堆栈顶部的元素。
   * @return {number}
   */
  top(): number {
    return this.dataStack[this.dataStack.length - 1];
  }

  /**
   * @description 获取堆栈中的最小元素。
   * @return {number}
   */
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

这里还是要像前面介绍链表一样思考，我这个栈谁说只能是 number 类型，它也可改造下是别的类型啊， 所以基于泛型的设计这就来了。

```typescript
import { paramsType } from './type';

export class MinStack<T extends paramsType> {
  minStack: T[];
  dataStack: T[];
  constructor() {
    this.minStack = [];
    this.dataStack = [];
  }

  /**
   * @description 将元素val推入堆栈。
   * @param {T} val
   * @return {void}
   */
  push(val: T): void {
    this.dataStack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else if (this.minStack[this.minStack.length - 1] >= val) {
      this.minStack.push(val);
    }
  }

  /**
   * @description  删除堆栈顶部的元素。
   * @return {void}
   */
  pop(): void {
    if (this.minStack[this.minStack.length - 1] === this.dataStack.pop()) {
      this.minStack.pop();
    }
  }

  /**
   * @description 获取堆栈顶部的元素。
   * @return {T}
   */
  top(): T {
    return this.dataStack[this.dataStack.length - 1];
  }

  /**
   * @description 获取堆栈中的最小元素。
   * @return {T}
   */
  getMin(): T {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

## 参考文献

- 维基百科 - 堆栈: https://zh.wikipedia.org/wiki/%E5%A0%86%E6%A0%88

# 队列

## 队列的基本概念

队列是一种先进先出（FIFO, First-In-First-Out）的数据结构，循环队列是一种头尾相连的队列，概况自维基百科。

队列在生活中的应用也很广泛，比如说食堂打饭，大家都是排成一列，先到的先打饭先走。再比如写 PPT，总是最前面的 PPT 先呈现在观众的眼前，这样的例子在生活中还有很多。。。。。。

## 队列的基本操作

在 Javascript 和 Typescript 中，"数组"天然自带队列的气质，平时开发直接拿来当队列用即可。既然数组自带队列的气质，用其实现队列自然是不在话下，那么请读者思考下，用对象能不能实现一个队列（为啥会有这个想法，获取元素更加高效了）？嗯，对的，是可以的。那么下面我们分别基于数组和对象去实现队列。

理了下队列大致有，入队、出队、返回队头，判空，获取队列长度，转换成字符串，清空等操作。

```typescript
export class Queue {
  constructor() {}

  /**
   * @description 入队操作
   * @param {number} element
   * @return {boolean}
   */
  enQueue(element: number): boolean {}

  /**
   * @description 出队操作
   * @return {boolean}
   */
  deQueue(): boolean {}

  /**
   * @description 返回队头元素
   * @return {number|undefined}
   */
  peek(): number | undefined {}

  /**
   * @description 判断是否为空
   * @return {boolean}
   */
  isEmpty(): boolean {}

  /**
   * @description 获取队列长度
   * @return {number}
   */
  getLength(): number {}

  /**
   * @description 转字符串输出
   * @returns
   */
  toString(): string {}

  /**
   * @description 清空队列
   */
  clear(): void {}
}
```

这里如果是基于数组的方式去实现的话，那么它需要一个数组去记录数据，并对其进行相关的操作,同时需要记录下队头和队的长度。

```typescript
class Queue {
  data: number[];
  head: number;
  length: number;

  constructor() {
    this.data = [];
    this.head = 0;
    this.length = 0;
  }
}
```

如果是基于对象的方式去实现的话，它需要一个对象去记录数据，然后需要记录队头和队尾后一个元素的位置。

```typescript
import { objectNumberType } from './type';

export class BetterQueue {
  data: objectNumberType;
  head: number;
  tail: number;

  constructor() {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }
}
```

### 入队

如果是基于数组的实现，那么直接塞到数组后面就好，长度追加 1

```typescript
 /**
   * @description 入队操作
   * @param {number} element
   * @return {boolean}
   */
  enQueue(element: number): boolean {
    this.data.push(element);
    this.length++;
    return true;
  }
```

如果是基于对象的实现，那么这里就更简单了，直接放置在 tail 元素的位置，然后 tail 的索引加 1

```typescript
  /**
   * @description 入队操作
   * @param {number} element
   * @return {boolean}
   */
  enQueue(element: number): boolean {
    this.data[this.tail] = element;
    this.tail++;
    return true;
  }
```

### 出队

如果是基于数组的实现，判断其是否为空，不是的话就把对头元素往后面移一个，是的，我们这里不直接调用数组的 API 把它删除，而是维护数组中的一串先进先出的数据结构。

```typescript
  /**
   * @description 出队操作
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head++;
    this.length--;
    return true;
  }
```

如果是对象的话，判断其是否为空，不是的话就对头加 1。

```typescript
 /**
   * @description 出队操作
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head++;
    return true;
  }
```

### 返回队头

基于数组的实现

```typescript
  /**
   * @description 返回队头元素
   * @return {number|undefined}
   */
  peek(): number | undefined {
    return this.data[this.head];
  }
```

基于对象的实现

```typescript
 /**
   * @description 返回队头元素
   * @return {number|undefined}
   */
  peek(): number | undefined {
    return this.data[this.head];
  }
```

### 判空

这个两者倒是一样的，长度为 0 不就是空嘛

```typescript
 /**
   * @description 判断是否为空
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.getLength() === 0;
  }
```

### 获取队列长度

基于数组的实现，因为其开始记录并维护了长度，所以这里直接返回

```typescript
  /**
   * @description 获取队列长度
   * @return {number}
   */
  getLength(): number {
    return this.length;
  }
```

基于对象的实现，队尾后一个元素减去对头就是所求的长度, 想一下这里我为什么不直接记录队尾啊，额，如果记录队尾还要加 1 把减掉的队头加上了，权衡了下还是记录队尾的下一个吧

```typescript
 /**
   * @description 获取队列长度
   * @return {number}
   */
  getLength(): number {
    return this.tail - this.head;
  }
```

### 转字符串

这里都是大同小异，一把遍历出结果。

基于数组的实现。

```typescript
  /**
   * @description 转字符串输出
   * @returns
   */
  toString(): string {
    let str = '';
    for (let i = 0; i < this.length; i++) {
      str = `${str}, ${this.data[this.head + i]}`;
    }
    return str.slice(2);
  }
```

基于对象的实现

```typescript
 /**
   * @description 转字符串输出
   * @returns
   */
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${this.data[this.head]}`;
    for (let i = this.head + 1; i < this.tail; i++) {
      str = `${str}, ${this.data[i]}`;
    }
    return str;
  }
```

### 清空

基于数组的实现

```typescript
  /**
   * @description 清空队列
   */
  clear(): void {
    this.data = [];
    this.head = 0;
    this.length = 0;
  }
```

基于对象的实现

```typescript
  /**
   * @description 清空队列
   */
  clear(): void {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }
```

完整的基于数组的实现

```typescript
export class Queue {
  data: number[];
  head: number;
  length: number;

  constructor() {
    this.data = [];
    this.head = 0;
    this.length = 0;
  }

  /**
   * @description 入队操作
   * @param {number} element
   * @return {boolean}
   */
  enQueue(element: number): boolean {
    this.data.push(element);
    this.length++;
    return true;
  }

  /**
   * @description 出队操作
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head++;
    this.length--;
    return true;
  }

  /**
   * @description 返回队头元素
   * @return {number|undefined}
   */
  peek(): number | undefined {
    return this.data[this.head];
  }

  /**
   * @description 判断是否为空
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.getLength() === 0;
  }

  /**
   * @description 获取队列长度
   * @return {number}
   */
  getLength(): number {
    return this.length;
  }

  /**
   * @description 转字符串输出
   * @returns
   */
  toString(): string {
    let str = '';
    for (let i = 0; i < this.length; i++) {
      str = `${str}, ${this.data[this.head + i]}`;
    }
    return str.slice(2);
  }

  /**
   * @description 清空队列
   */
  clear(): void {
    this.data = [];
    this.head = 0;
    this.length = 0;
  }
}
```

完整的基于对象的队列

```typescript
import { objectNumberType } from './type';

export class BetterQueue {
  data: objectNumberType;
  head: number;
  tail: number;

  constructor() {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }

  /**
   * @description 入队操作
   * @param {number} element
   * @return {boolean}
   */
  enQueue(element: number): boolean {
    this.data[this.tail] = element;
    this.tail++;
    return true;
  }

  /**
   * @description 出队操作
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.head++;
    return true;
  }

  /**
   * @description 返回队头元素
   * @return {number|undefined}
   */
  peek(): number | undefined {
    return this.data[this.head];
  }

  /**
   * @description 判断是否为空
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.getLength() === 0;
  }

  /**
   * @description 获取队列长度
   * @return {number}
   */
  getLength(): number {
    return this.tail - this.head;
  }

  /**
   * @description 转字符串输出
   * @returns
   */
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let str = `${this.data[this.head]}`;
    for (let i = this.head + 1; i < this.tail; i++) {
      str = `${str}, ${this.data[i]}`;
    }
    return str;
  }

  /**
   * @description 清空队列
   */
  clear(): void {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }
}
```

篇幅问题，这里基于泛型的改造我就不放了，请移步到： https://github.com/ataola/coding-ts/tree/main/code/base

## 循环队列的基本操作

需要实现如下功能

```
MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。
```

本题来自 leetcode, https://leetcode-cn.com/leetbook/read/queue-stack/kzlb5/

```typescript
export class MyCircularQueue {
  constructor(k: number) {}

  /**
   * @description  向循环队列插入一个元素。如果成功插入则返回真。如果入队前是空的，则将head 和 tail 都向右移一位，也就是下标为0的地方; 否则只需右移tail
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value: number): boolean {}

  /**
   * @description 从循环队列中删除一个元素。如果成功删除则返回真。如果出队时队列不为空且为最后一个元素(head == tail)，则置head = tail = -1, 否则只需右移head
   * @return {boolean}
   */
  deQueue(): boolean {}

  /**
   * @description 从队首获取元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Front(): number {}

  /**
   * @description  获取队尾元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Rear(): number {}

  /**
   * @description 检查循环队列是否为空。head = tail = -1;
   * @return {boolean}
   */
  isEmpty(): boolean {}

  /**
   * @description 检查循环队列是否已满。
   * @return {boolean}
   */
  isFull(): boolean {}
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
```

这里需要一个数组 data 去存放数据，然后需要一个队头，队尾，还有一个最大尺寸。这里巧妙在，最开始设置 head 和 tail 为-1，可能有些同学想不到。

```typescript
export class MyCircularQueue {
  data: number[];
  head: number;
  tail: number;
  maxSize: number;
  constructor(k: number) {
    this.data = new Array(k);
    this.head = -1;
    this.tail = -1;
    this.maxSize = k;
  }
}
```

### 入队

向循环队列插入一个元素。如果成功插入则返回真。如果入队前是空的，则将 head 和 tail 都向右移一位，也就是下标为 0 的地方; 否则只需右移 tail

```typescript
  /**
   * @description  向循环队列插入一个元素。如果成功插入则返回真。如果入队前是空的，则将head 和 tail 都向右移一位，也就是下标为0的地方; 否则只需右移tail
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.head++;
      this.tail++;
      this.data[this.tail] = value;
    } else {
      this.tail = (this.tail + 1) % this.maxSize;
      this.data[this.tail] = value;
    }
    return true;
  }
```

### 出队

从循环队列中删除一个元素。如果成功删除则返回真。如果出队时队列不为空且为最后一个元素(head == tail)，则置 head = tail = -1, 否则只需右移 head

```typescript
/**
   * @description 从循环队列中删除一个元素。如果成功删除则返回真。如果出队时队列不为空且为最后一个元素(head == tail)，则置head = tail = -1, 否则只需右移head
   * @return {boolean}
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    delete this.data[this.head];
    if (this.head === this.tail) {
      this.head = this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.maxSize;
    }
    return true;
  }
```

### 获取队首

从队首获取元素。如果队列为空，返回 -1 。

```typescript
 /**
   * @description 从队首获取元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.head];
  }
```

### 获取队尾元素

从队尾获取元素。如果队列为空，返回 -1 。

```typescript
/**
   * @description  获取队尾元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.tail];
  }
```

### 判空

队头和队尾的位置等于-1 的话就是空

```typescript
 /**
   * @description 检查循环队列是否为空。head = tail = -1;
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.head === this.tail && this.head === -1;
  }
```

### 判满

队尾元素的位置加 1 对最大尺寸取余等于队头的位置就是满了。

```typescript
 /**
   * @description 检查循环队列是否已满。
   * @return {boolean}
   */
  isFull(): boolean {
    return (this.tail + 1) % this.maxSize === this.head;
  }
```

## 参考文献

- 维基百科 - 队列： https://zh.wikipedia.org/wiki/%E9%98%9F%E5%88%97

- 维基百科 - 循环队列: https://zh.wikipedia.org/wiki/%E7%92%B0%E5%BD%A2%E7%B7%A9%E8%A1%9D%E5%8D%80

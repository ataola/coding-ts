# 字典

## 字典的基本概念

形如存储`[键,值]`对的数据结构，我们称之为字典（也叫做映射、符号表、关联数组）。

## 字典的基本操作

字典的基本操作有添加元素，删除元素，元素是否存在，获取元素，清空元素，获取字典包含值的数量，判空，获取所有键名、键值、键值对，迭代遍历，转换成 String 等方法

```typescript
export class Dictionary {
  table: any;
  toStrFn: Function;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  /**
   * @description 向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖。
   * @param {any} key
   * @param {any} value
   * @return {boolean}
   */
  set(key: any, value: any): boolean {}

  /**
   * @description 通过使用键值作为参数来从字典中移除键值对应的数据值。
   * @param {any} key
   * @return {boolean}
   */
  remove(key: any): boolean {}

  /**
   * @description 如果某个键值存在于该字典中，返回true，否则返回false。
   * @param {any} key
   * @return {boolean}
   */
  hasKey(key: any): boolean {}

  /**
   * @description 通过以键值作为参数查找特定的数值并返回。
   * @param {any} key
   * @return {any}
   */
  get(key: any): any {}

  /**
   * @description 删除该字典中的所有值。
   * @return {void}
   */
  clear(): void {}

  /**
   * @description 返回字典所包含值的数量。与数组的length 属性类似。
   * @return {number}
   */
  size(): number {}

  /**
   * @description 在size 等于零的时候返回true，否则返回false。
   * @return {boolean}
   */
  isEmpty(): boolean {}

  /**
   * @description 将字典所包含的所有键名以数组形式返回。
   * @return {string[]}
   */
  keys(): string[] {}

  /**
   * @description 将字典所包含的所有数值以数组形式返回。
   * @return {any[]}
   */
  values(): any[] {}

  /**
   * @description 将字典中所有[键，值]对返回。
   * @return {ValuePair[]}
   */
  keyValues(): ValuePair[] {}

  /**
   * @description 迭代字典中所有的键值对。callbackFn 有两个参数：key 和value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）。
   * @param callbackFn
   * @return {void}
   */
  forEach(callbackFn: Function): void {}

  /**
   * @description 转换成string的方法
   * @return {string}
   */
  toString(): string {}
}
```

### 键名转 String 的方法

这里统一将传进来的键名转成 String 方法，先判断一些特殊情况，如 null、undefined 等，然后如果是字符串的话就字符串输出，剩下的调用 toString()方法。

```typescript
export function defaultToString(arg: any): string {
  if (arg === 'null') {
    return 'null';
  } else if (arg === undefined) {
    return 'undefined';
  } else if (typeof arg === 'string' || arg instanceof String) {
    return `${arg}`;
  }
  return arg.toString();
}
```

### 键值对

创建一个类 ValuePair 用来表示键值对

```typescript
class ValuePair {
  key: string;
  value: any;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
```

### 添加元素

判断如果传入的 key 和 value 都不为 null 的话，那就调用 toStrFn 方法将 key 转换成 string 类型，并创建一个新的 ValuePair 对象赋值给` this.table[this.toStrFn(key)]`, 操作成功返回 true，否则返回 false。

```typescript
  /**
   * @description 向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖。
   * @param {any} key
   * @param {any} value
   * @return {boolean}
   */
  set(key: any, value: any): boolean {
    if (key !== null && value !== null) {
      this.table[this.toStrFn(key)] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
```

### 元素是否存在

判断元素是否存在，只要判断 table 上有没有该 key 转换成 string 类型后的元素即可

```typescript
 /**
   * @description 如果某个键值存在于该字典中，返回true，否则返回false。
   * @param {any} key
   * @return {boolean}
   */
  hasKey(key: any): boolean {
    return this.table[this.toStrFn(key)] !== null;
  }
```

### 移除元素

通过我们实现的 api`hasKey`判断是否存在元素、如果存在我们就删除并且返回 true，否则返回 false。

```typescript
  /**
   * @description 通过使用键值作为参数来从字典中移除键值对应的数据值。
   * @param {any} key
   * @return {boolean}
   */
  remove(key: any): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
```

### 获取元素

通过将 key 转换成字符串后，从 table 中取出对应的元素，如果为空的话那就是没有了，不为空的话返回对应的值。

```typescript
  /**
   * @description 通过以键值作为参数查找特定的数值并返回。
   * @param {any} key
   * @return {any}
   */
  get(key: any): any {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value;
  }
```

### 清空字典

```typescript
  /**
   * @description 删除该字典中的所有值。
   * @return {void}
   */
  clear(): void {
    this.table = {};
  }

```

### 返回元素数量

通过调用`Object.keys`函数获取 table 里的所有的 key，然后返回其长度

```typescript
  /**
   * @description 返回字典所包含值的数量。与数组的length 属性类似。
   * @return {number}
   */
  size(): number {
    return Object.keys(this.table).length;
  }
```

### 判断是否为空

键名个数为 0 就是空，调用之前实现的 size 方法做一次判断即可。

```typescript
  /**
   * @description 在size 等于零的时候返回true，否则返回false。
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }
```

### 返回所有键值对

通过`for in`循环遍历出 table 里面的元素，判断其是不是在 table 上，是的话就塞到数组 valuePairs 上面，最后返回。

```typescript
  /**
   * @description 将字典中所有[键，值]对返回。
   * @return {ValuePair[]}
   */
  keyValues(): ValuePair[] {
    const valuePairs: ValuePair[] = [];
    for (const key in this.table) {
      if (this.hasKey(key)) {
        valuePairs.push(this.table[this.toStrFn(key)]);
      }
    }

    return valuePairs;
  }
```

### 返回所有键名

通过上面实现的 keyValues 方法返回的数组，然后调用 E6 数组的高阶函数 map 去返回对应的 key。

```typescript
 /**
   * @description 将字典所包含的所有键名以数组形式返回。
   * @return {string[]}
   */
  keys(): string[] {
    return this.keyValues().map((valuePair: ValuePair) => valuePair.key);
  }
```

### 返回所以键值

通过上面实现的 keyValues 方法返回的数组，然后调用 E6 数组的高阶函数 map 去返回对应的 value。

```typescript
  /**
   * @description 将字典所包含的所有数值以数组形式返回。
   * @return {any[]}
   */
  values(): any[] {
    return this.keyValues().map((valuePair: ValuePair) => valuePair.value);
  }
```

### 遍历元素

```typescript
  /**
   * @description 迭代字典中所有的键值对。callbackFn 有两个参数：key 和value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）。
   * @param callbackFn
   * @return {void}
   */
  forEach(callbackFn: Function): void {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (!result) {
        break;
      }
    }
  }
```

### 转 String

判断为空的话就直接返回字符串、不是的话就循环遍历然后拼接，这里用 ES6 的模板字符串拼接还是很 nice 的。

```typescript
  /**
   * @description 转换成string的方法
   * @return {string}
   */
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    const valuePairs = this.keyValues();
    let res: string = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      res = `${res}, ${valuePairs[i].toString()}`;
    }

    return res;
  }
```

完整的代码如下：

```typescript
import { defaultToString } from '../utils/helper';

class ValuePair {
  key: string;
  value: any;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export class Dictionary {
  table: any;
  toStrFn: Function;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  /**
   * @description 向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖。
   * @param {any} key
   * @param {any} value
   * @return {boolean}
   */
  set(key: any, value: any): boolean {
    if (key !== null && value !== null) {
      this.table[this.toStrFn(key)] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  /**
   * @description 通过使用键值作为参数来从字典中移除键值对应的数据值。
   * @param {any} key
   * @return {boolean}
   */
  remove(key: any): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  /**
   * @description 如果某个键值存在于该字典中，返回true，否则返回false。
   * @param {any} key
   * @return {boolean}
   */
  hasKey(key: any): boolean {
    return this.table[this.toStrFn(key)] !== null;
  }

  /**
   * @description 通过以键值作为参数查找特定的数值并返回。
   * @param {any} key
   * @return {any}
   */
  get(key: any): any {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair === null ? undefined : valuePair.value;
  }

  /**
   * @description 删除该字典中的所有值。
   * @return {void}
   */
  clear(): void {
    this.table = {};
  }

  /**
   * @description 返回字典所包含值的数量。与数组的length 属性类似。
   * @return {number}
   */
  size(): number {
    return Object.keys(this.table).length;
  }

  /**
   * @description 在size 等于零的时候返回true，否则返回false。
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * @description 将字典所包含的所有键名以数组形式返回。
   * @return {string[]}
   */
  keys(): string[] {
    return this.keyValues().map((valuePair: ValuePair) => valuePair.key);
  }

  /**
   * @description 将字典所包含的所有数值以数组形式返回。
   * @return {any[]}
   */
  values(): any[] {
    return this.keyValues().map((valuePair: ValuePair) => valuePair.value);
  }

  /**
   * @description 将字典中所有[键，值]对返回。
   * @return {ValuePair[]}
   */
  keyValues(): ValuePair[] {
    const valuePairs: ValuePair[] = [];
    for (const key in this.table) {
      if (this.hasKey(key)) {
        valuePairs.push(this.table[this.toStrFn(key)]);
      }
    }

    return valuePairs;
  }

  /**
   * @description 迭代字典中所有的键值对。callbackFn 有两个参数：key 和value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）。
   * @param callbackFn
   * @return {void}
   */
  forEach(callbackFn: Function): void {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (!result) {
        break;
      }
    }
  }

  /**
   * @description 转换成string的方法
   * @return {string}
   */
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    const valuePairs = this.keyValues();
    let res: string = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      res = `${res}, ${valuePairs[i].toString()}`;
    }

    return res;
  }
}
```

## 参考文献

- 《学习 Javascript 数据结构与算法第三版》

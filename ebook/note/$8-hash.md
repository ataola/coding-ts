# 哈希表（散列表）

## 哈希表的基本概念

哈希表是字典中的一种特殊的情况，它在原来字典的基础上，会有个哈希函数去处理对应键名然后返回一个位置将键值对存放进去。我们在查字典的时候，通过拼音查到某个字，这里你可以看成是一个散列函数，然后根据查到的页码翻到相应的页，最终我们知道了所要查找的字的内容。

## 哈希函数

这里了解下一些常见的哈希函数。

### lose lose 哈希函数

```typescript
import { defaultToString } from './helper';

export function loseloseHashCode(key: any): number {
  if (typeof key === 'number') {
    return key;
  }

  let hash = 0;
  const tableKey = defaultToString(key);
  for (let i = 0; i < tableKey.length; i++) {
    hash += tableKey.charCodeAt(i);
  }

  return hash % 37;
}
```

### djb2 哈希函数

```typescript
import { defaultToString } from './helper';

export function djb2HashCode(key: any): number {
  const tableKey = defaultToString(key);
  let hash = 5381;
  for (let i = 0; i < tableKey.length; i++) {
    hash = hash * 33 + tableKey.charCodeAt(i);
  }

  return hash % 1013;
}
```

## 哈希表的基本操作

大体上和字典是一样的,请参考字典章节

### 哈希函数

```typescript
  /**
   * @description Hash函数
   * @param {any} key
   * @return {number}
   */
  hashCode(key: any): number {
    return loseloseHashCode(key);
  }
```

### 添加元素

通过哈希函数算出一个位置，然后创建一个键值对赋值给 table 对应的位置。

```typescript
 /**
   * @description 向散列表增加一个新的项（也能更新散列表）。
   * @param {any} key
   * @param {any} value
   * @return {boolean}
   */
  put(key: any, value: any): boolean {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
```

### 删除元素

通过哈希函数算出 key 在 table 上是不是有位置，是的话就删除并返回 true，否则返回 false。

```typescript

  /**
   * @description 根据键值从散列表中移除值。
   * @param {any} key
   * @return {boolean}
   */
  remove(key: any): boolean {
    const valuePair = this.table[this.hashCode(key)];
    if (valuePair !== null) {
      delete this.table[this.hashCode(key)];
      return true;
    }
    return false;
  }
```

### 获取元素

通过哈希函数算出的位置，判断 table 上是否有值，是的话就返回对应的值，否则返回 undefined。

```typescript
  /**
   * @description 返回根据键值检索到的特定的值。
   * @param {any} key
   * @return {boolean}
   */
  get(key: any): boolean {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair === null ? undefined : valuePair.value;
  }
```

完整的代码如下：

```typescript
import { defaultToString } from '../utils/helper';
import { loseloseHashCode } from '../utils/hash';

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

export class HashTable {
  table: any;
  toStrFn: Function;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  /**
   * @description 向散列表增加一个新的项（也能更新散列表）。
   * @param {any} key
   * @param {any} value
   * @return {boolean}
   */
  put(key: any, value: any): boolean {
    if (key !== null && value !== null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  /**
   * @description 根据键值从散列表中移除值。
   * @param {any} key
   * @return {boolean}
   */
  remove(key: any): boolean {
    const valuePair = this.table[this.hashCode(key)];
    if (valuePair !== null) {
      delete this.table[this.hashCode(key)];
      return true;
    }
    return false;
  }

  /**
   * @description 返回根据键值检索到的特定的值。
   * @param {any} key
   * @return {boolean}
   */
  get(key: any): boolean {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair === null ? undefined : valuePair.value;
  }

  /**
   * @description Hash函数
   * @param {any} key
   * @return {number}
   */
  hashCode(key: any): number {
    return loseloseHashCode(key);
  }

  /**
   * @description 返回哈希表所包含值的数量。与数组的length 属性类似。
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
   * @description 删除该哈希表中的所有值。
   * @return {void}
   */
  clear(): void {
    this.table = {};
  }

  /**
   * @description 如果某个键值存在于该哈希表中，返回true，否则返回false。
   * @param {any} key
   * @return {boolean}
   */
  hasKey(key: any): boolean {
    return this.table[this.toStrFn(key)] !== null;
  }

  /**
   * @description 将哈希表所包含的所有键名以数组形式返回。
   * @return {string[]}
   */
  keys(): string[] {
    return this.keyValues().map((valuePair: ValuePair) => valuePair.key);
  }

  /**
   * @description 将哈希表所包含的所有数值以数组形式返回。
   * @return {any[]}
   */
  values(): any[] {
    return this.keyValues().map((valuePair: ValuePair) => valuePair.value);
  }

  /**
   * @description 将哈希表中所有[键，值]对返回。
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
   * @description 转换成string的方法
   * @return {string}
   */
  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    const keys = this.keys();
    let res: string = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      res = `${res}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }

    return res;
  }
}
```

## 参考文献

- 《学习 Javascript 数据结构与算法第三版》

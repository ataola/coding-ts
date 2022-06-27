import { defaultToString, TFunc2String } from '../utils/helper';

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
  toStrFn: TFunc2String;

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
  forEach(callbackFn: TFunc2String): void {
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
    let res = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      res = `${res}, ${valuePairs[i].toString()}`;
    }

    return res;
  }
}

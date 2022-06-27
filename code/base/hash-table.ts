import { defaultToString, TFunc2String } from '../utils/helper';
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
  toStrFn: TFunc2String;

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
    let res = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      res = `${res}, {${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }

    return res;
  }
}

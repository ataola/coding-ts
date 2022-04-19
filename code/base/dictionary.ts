import { defaultToString } from '../utils/helper';

export class Dictionary {
  table: any;
  toStrFn: Function;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  /**
   * @description 向字典中添加新元素。如果key 已经存在，那么已存在的 value 会被新的值覆盖。
   * @param key
   * @param value
   */
  set(key: any, value: any) {}

  /**
   * @description 通过使用键值作为参数来从字典中移除键值对应的数据值。
   * @param key
   */
  remove(key: any) {}

  /**
   * @description 如果某个键值存在于该字典中，返回true，否则返回false。
   * @param key
   */
  hasKey(key: any) {}

  /**
   * @description 通过以键值作为参数查找特定的数值并返回。
   * @param key
   */
  get(key: any) {}

  /**
   * @description 删除该字典中的所有值。
   */
  clear() {}

  /**
   * @description 返回字典所包含值的数量。与数组的length 属性类似。
   */
  size() {}

  /**
   * @description 在size 等于零的时候返回true，否则返回false。
   */
  isEmpty() {}

  /**
   * @description 将字典所包含的所有键名以数组形式返回。
   */
  keys() {}

  /**
   * @description 将字典所包含的所有数值以数组形式返回。
   */
  values() {}

  /**
   * @description 将字典中所有[键，值]对返回。
   */
  keyValues() {}

  /**
   * @description 迭代字典中所有的键值对。callbackFn 有两个参数：key 和value。该方法可以在回调函数返回false 时被中止（和Array 类中的every 方法相似）。
   * @param callbackFn
   */
  forEach(callbackFn: Function) {}
}

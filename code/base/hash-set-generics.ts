import { paramsType } from './type';

export class MyHashSet<T extends paramsType> {
  set: any;
  constructor() {
    this.set = {};
  }

  /**
   * @description 向哈希集合中插入值 key
   * @param {T} key
   * @return {void}
   */
  add(key: T): void {
    if (!this.set[key]) {
      this.set[key] = 1;
    }
  }

  /**
   * @description 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做
   * @param {T} key
   * @return {void}
   */
  remove(key: T): void {
    delete this.set[key];
  }

  /**
   * @description  返回哈希集合中是否存在这个值 key
   * @param {T} key
   * @return {boolean}
   */
  contains(key: T): boolean {
    return this.set[key] ? true : false;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

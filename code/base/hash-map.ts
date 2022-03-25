export class MyHashMap {
  map: any;
  constructor() {
    this.map = {};
  }

  /**
   * @description  向 HashMap 插入一个键值对 (key, value) 。如果 key 已经存在于映射中，则更新其对应的值
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key: number, value: number): void {
    this.map[key] = value;
  }

  /**
   * @description 返回特定的 key 所映射的 value ；如果映射中不包含 key 的映射，返回 -1 。
   * @param {number} key
   * @return {number}
   */
  get(key: number): number {
    return this.map[key] !== undefined ? this.map[key] : -1;
  }

  /**
   * @description 如果映射中存在 key 的映射，则移除 key 和它所对应的 value 。
   * @param {number} key
   * @return {void}
   */
  remove(key: number): void {
    delete this.map[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

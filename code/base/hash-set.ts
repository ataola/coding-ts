export class MyHashSet {
  set: any;
  constructor() {
    this.set = {};
  }

  /**
   * @description 向哈希集合中插入值 key
   * @param {number} key
   * @return {void}
   */
  add(key: number): void {
    if (!this.contains(key)) {
      this.set[key] = key;
    }
  }

  /**
   * @description 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做
   * @param {number} key
   * @return {void}
   */
  remove(key: number): void {
    delete this.set[key];
  }

  /**
   * @description  返回哈希集合中是否存在这个值 key
   * @param {number} key
   * @return {boolean}
   */
  contains(key: number): boolean {
    return Object.prototype.hasOwnProperty.call(this.set, key);
  }

  /**
   * @description 移除哈希集合中的所有元素
   * @return {void}
   */
  clear(): void {
    this.set = {};
  }

  /**
   * @description 返回哈希集合中元素的数量
   * @return {number}
   */
  size(): number {
    return Object.keys(this.set).length;
  }

  /**
   * @description 返回包含哈希集合元素的数组
   * @return {number[]}
   */
  values(): number[] {
    return Object.values(this.set);
  }

  /**
   * @description 并集
   * @param {MyHashSet} otherSet
   * @return {MyHashSet}
   */
  union(otherSet: MyHashSet): MyHashSet {
    const unionSet = new MyHashSet();
    for (const value of [...this.values(), ...otherSet.values()]) {
      unionSet.add(value);
    }
    return unionSet;
  }

  /**
   * @description 交集
   * @param {MyHashSet} otherSet
   * @return {MyHashSet}
   */
  intersection(otherSet: MyHashSet): MyHashSet {
    const intersectionSet = new MyHashSet();
    let bigValues = this.values();
    let smallValues = otherSet.values();
    if (bigValues.length < smallValues.length) {
      [smallValues, bigValues] = [bigValues, smallValues];
    }
    for (const value of smallValues) {
      if (bigValues.includes(value)) {
        intersectionSet.add(value);
      }
    }
    return intersectionSet;
  }

  /**
   * @description 差集
   * @param {MyHashSet} otherSet
   * @return {MyHashSet}
   */
  difference(otherSet: MyHashSet): MyHashSet {
    const differenceSet = new MyHashSet();
    for (const value of this.values()) {
      if (!otherSet.contains(value)) {
        differenceSet.add(value);
      }
    }
    return differenceSet;
  }

  /**
   * @description 子集
   * @param {MyHashSet} otherSet
   * @return {boolean}
   */
  isSubSetOf(otherSet: MyHashSet): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let res = true;
    for (const value of this.values()) {
      if (!this.contains(value)) {
        res = false;
        break;
      }
    }
    return res;
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

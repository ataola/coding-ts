# 集合

## 集合的基本概念

集合是由一组无序且唯一（即不能重复）的项组成的数据结构

## 集合的实现

集合的实现就比较简单了，常规的操作往一个集合里添加元素， 删除元素，判断元素是否存在，集合中有几个元素，分别是啥，怎么清除它，所以大致的框架是这样子的。

```typescript
export class MyHashSet {
  /**
   * @description 向哈希集合中插入值 key
   * @param {number} key
   * @return {void}
   */
  add(key: number): void {}

  /**
   * @description 将给定值 key 从哈希集合中删除。如果哈希集合中没有这个值，什么也不做
   * @param {number} key
   * @return {void}
   */
  remove(key: number): void {}

  /**
   * @description  返回哈希集合中是否存在这个值 key
   * @param {number} key
   * @return {boolean}
   */
  contains(key: number): boolean {}

  /**
   * @description 移除哈希集合中的所有元素
   * @return {void}
   */
  clear(): void {}

  /**
   * @description 返回哈希集合中元素的数量
   * @return {number}
   */
  size(): number {}

  /**
   * @description 返回包含哈希集合元素的数组
   * @return {number[]}
   */
  values(): number[] {}
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```

因为比较简单就不分开讲了，首先我们新建一个对象去存储集合的元素，如果不存在的话，就设置这个对象对应的属性值为其本身，删除直接调用 delete，包含的话调用 Object 的 hasOwnProperty 方法。清空的话赋值给一个`{}`对象即可，获取元素和长度可以借助在 Object 中`Object.keys`和`Object.values`实现。这里因为返回值的 API 都设置成`void`代码会少几句，读者可以思考下设置成`boolean`类型的访问又是如何实现的。

```typescript
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
    if (!this.contain(key)) {
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
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```

基于泛型的集合实现

```typescript
type paramsType = string | number;

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
    if (!this.contains(key)) {
      this.set[key] = key;
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
   * @return {T[]}
   */
  values(): T[] {
    return Object.values(this.set);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
```

## 集合运算

### 交集

对于给定的两个集合，返回一个包含两个集合中共有元素的新集合。

这里做了一部优化，就是用两个集合中较小的集合去做遍历运算，这样子的好处就是比如一个集合 100 个元素，一个集合 8 个元素，显而易见是拿比较小的去做遍历效率高一点，这个集合越大越明显。

```typescript
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
```

### 并集

对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。

先获取两个集合里的元素，然后遍历重新组建新的集合。

```typescript
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
```

### 差集

对于给定的两个集合，返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合。

遍历其中一个集合元素，判断其是否不在另一个集合里面，是的话就添加到差集里面。

```typescript
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
```

### 子集

验证一个给定集合是否是另一集合的子集。

如果集合本身比要比较的集合元素多，那很显然不是，我只要找出一个不满足于要比较的集合元素那么就不是它的子集。

```typescript
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
```

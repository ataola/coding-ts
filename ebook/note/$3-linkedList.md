# 链表

## 链表的基本概念

链表是一种包含数据域和指针域的数据结构，一般用头结点代表整个链表，与数组不同的是，链表的内存并不是连续的，概括自维基百科。

## 链表家族成员介绍

### 单向链表

单向链表包含两个域，一个数据域和一个指针域。这个链接指向列表中的下一个结点，而最后一个结点则指向一个空值。

### 双向链表

双向链表每个结点有两个连接：一个指向前一个结点，（当此“连接”为第一个“连接”时，指向空值或者空列表）；而另一个指向下一个结点，（当此“连接”为最后一个“连接”时，指向空值或者空列表）。

### 循环链表

循环链表是一种“无头无尾”的链表，首结点和末结点被连接在一起。

_这里有些参考书是节点，有些是结点， 其实他们所表述的是一个意思。笔者查阅了相关资料，最终认为结点比较合理，所以文中以结点来表述，英文单词 node 翻译过来本身就有结点的意思，另一方面，结点强调空间方面，比如说打结，而节点更加强调时间方面，比如一个事件的时间新闻节点_

## 链表的操作方式

_这里以单向链表的实现为例进行讲解_

### 链表的创建

吃过冰糖葫芦的朋友，可以发现冰糖葫芦这个结构啊，它很像链表。我们把山楂清洗干净，在外面糊上一层冰糖，准备好大牙签，一个一个串起来，每个山楂的头都指向下一个山楂，直到冰糖葫芦串最后一个山楂指向空气，像这样的模型，我们可以把它称之为“冰糖链表模型”。

#### 链表结点的定义

根据楼上的模型，我们把山楂抽象出来就是链表的结点了，它包含本身的数据和指向下一个结点的指针。

```typescript
/**
 * Definition for singly-linked list.
 */
export default class SinglyListNode {
  val: number;
  next: SinglyListNode | null;
  constructor(val?: number, next?: SinglyListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
```

是的，可能细心的读者已经观察到了，楼上的就是笔者刷 leetcode 时，leetcode 上面给出的链表结点的实现。这里的数据域是 number 类型的变量，但是在很多我们现实生活的场景，这里的数据它难道不可以是 string 类型，boolean 类型等等吗？想一下，我们需要什么啊？我们其实是需要一个模板，这个模板到时候你可以根据自己的业务场景去框定它是 number、string 还是 boolean 等等。这里就引入了 typescript 中的泛型，通过泛型我们可以轻松地实现我们楼上的需求。

在`type.ts`下定义参数类型如：

```typescript
export type paramsType = number | string | boolean;
```

基于泛型实现的结点类如下：

```typescript
import { paramsType } from './type';

/**
 * Definition for singly-linked list.
 */
export default class SinglyListNode<T extends paramsType> {
  val: T | undefined;
  next: SinglyListNode<T> | null;
  constructor(val?: T, next?: SinglyListNode<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}
```

_这里我们先定义了一个联合类型 paramsType,然后通过<T extends xx> 的方式约束泛型, 想一下为什么不直接写<T>不是更少写点代码吗？是这样子的，例如 `SinglyListNode<null>`, `SinglyListNode<undefined>`这种就不会触发编译报错，而通过上面约束泛型的形式可以避免这个问题_

#### 链表的定义

一个单链表，它应该包含获取链表中第 n 个结点的方法， 在链表头部添加结点的方法，在链表尾部添加结点的方法，在链表的第 n 个结点添加链表的方法，删除第 n 个结点的方法，获取整个链表的方法等等

```typescript
import SinglyListNode from './singly-list-node';
export class SinglyLinkedList {
  dummy: SinglyListNode;
  length: number;
  constructor() {
    this.dummy = new SinglyListNode();
    this.length = 0;
  }

  /**
   * @description 获取链表中第 index 个结点的值。如果索引无效，则返回-1。
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {}

  /**
   * @description 在链表的第一个元素之前添加一个值为 val 的结点。插入后，新结点将成为链表的第一个结点。
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: number): void {}

  /**
   * @description 将值为 val 的结点追加到链表的最后一个元素。
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: number): void {}

  /**
   * @description 在链表中的第 index 个结点之前添加值为 val  的结点。如果 index 等于链表的长度，则该结点将附加到链表的末尾。如果 index 大于链表长度，则不会插入结点。如果index小于0，则在头部插入结点。
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: number): void {}

  /**
   * @description 如果索引 index 有效，则删除链表中的第 index 个结点。
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {}

  /**
   * @description 获取整个链表
   * @return {SinglyListNode}
   */
  getLinkedList(): SinglyListNode {}
}
```

那么，创建一个链表就是这样的啦。

```typescript
/**
 * Your SinglyLinkedList object will be instantiated and called as such:
 */
const obj = new SinglyLinkedList();
const param = obj.get(0);
obj.addAtHead(1);
obj.addAtTail(2);
obj.addAtIndex(1, 3);
obj.deleteAtIndex(2);
```

_这里我们会在初始化链表的时候，创建一个 dummy 结点，有了它你会发现，后面获取整个链表，包括对链表的一些操作会简单很多_

同样的，既然有基于泛型的链表结点，那自然是有基于泛型的链表

```typescript
import { paramsType } from './type';
import SinglyListNode from './singly-list-node-generics';

export class SinglyLinkedList<T extends paramsType> {
  dummy: SinglyListNode<T>;
  length: number;
  constructor() {
    this.dummy = new SinglyListNode<T>();
    this.length = 0;
  }

  /**
   * @description 获取链表中第 index 个结点的值。如果索引无效，则返回undefined。
   * @param {number} index
   * @return {T | undefined}
   */
  get(index: number): T | undefined {}

  /**
   * @description 在链表的第一个元素之前添加一个值为 val 的结点。插入后，新结点将成为链表的第一个结点。
   * @param {T} val
   * @return {void}
   */
  addAtHead(val: T): void {}

  /**
   * @description 将值为 val 的结点追加到链表的最后一个元素。
   * @param {T} val
   * @return {void}
   */
  addAtTail(val: T): void {}

  /**
   * @description 在链表中的第 index 个结点之前添加值为 val  的结点。如果 index 等于链表的长度，则该结点将附加到链表的末尾。如果 index 大于链表长度，则不会插入结点。如果index小于0，则在头部插入结点。
   * @param {number} index
   * @param {T} val
   * @return {void}
   */
  addAtIndex(index: number, val: T): void {}

  /**
   * @description 如果索引 index 有效，则删除链表中的第 index 个结点。
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {}

  /**
   * @description 获取整个链表
   * @returns {SinglyListNode<T>}
   */
  getLinkedList(): SinglyListNode<T> {}
}
```

_由于泛型的链表实现和链表并没有太大的差别，为了不占用篇幅，这里就点一下，在后面的子标题介绍中，就介绍针对于链表的实现_

### 链表的遍历

这里我们实现一个 toString 方法，将链表的每个元素遍历出来。实现的思路是我们将 dummy 结点的 next 指针赋值给变量 cur，如果变量 cur 为 null 的话表示是空链表，如果 cur 存在的话，一把 while 循环遍历它，然后扁平化输出。

```typescript
/**
   * @description 转成字符串
   * @return {string}
   */
  toString(): string {
    let res: string = '';
    let cur: SinglyListNode | null = this.dummy.next;
    if (!cur) {
      return res;
    } else {
      while (cur) {
        res = `${res}, ${cur.val}`;
        cur = cur.next!;
      }
    }
    return res.slice(2);
  }
```

### 获取链表的某个结点

这里和楼上的链表的遍历有点像，只不过判断依据不一样，首先我们先判断这个结点在不在（事先追加一个 length 属性去记录链表的长度），如果不在直接返回-1,如果在的话那么就按索引循环，终止的条件是索引小于 0，最后再返回对于的结点的值

```typescript
 /**
   * @description 获取链表中第 index 个结点的值。如果索引无效，则返回-1。
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let cur: SinglyListNode = this.dummy;
    while (index >= 0) {
      cur = cur.next!;
      index--;
    }

    return cur.val;
  }
```

### 链表的插入

插入这个操作有两个比较特殊的情况，就是在头结点插入和尾结点插入，普通的就是在任意位置插入。

#### 头结点插入

我们把 dummy 结点的 next 指针指向的结点赋值给 cur，然后创建一个新的结点，将它的 next 指针指向 cur，最后我们将 dummy 结点的 next 指针指向我们刚才创建好的结点，最后长度+1。

```typescript
  /**
   * @description 在链表的第一个元素之前添加一个值为 val 的结点。插入后，新结点将成为链表的第一个结点。
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: number): void {
    const cur = this.dummy.next;
    const singlyListNode = new SinglyListNode(val, cur);
    this.dummy.next = singlyListNode;
    this.length++;
  }
```

#### 尾结点插入

我们把 dummy 结点赋值给变量 cur，然后根据条件`cur && cur.next` 循环，直到 cur 为最后一个结点时，我们将其 next 指针指向刚才创建的结点

```typescript
 /**
   * @description 将值为 val 的结点追加到链表的最后一个元素。
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: number): void {
    const singlyListNode = new SinglyListNode(val);
    let cur: SinglyListNode = this.dummy;
    while (cur && cur.next) {
      cur = cur.next;
    }
    cur.next = singlyListNode;
    this.length++;
  }
```

#### 任意位置插入

任意位置这里就要分类讨论啦， 前面我们已经实现了在头节点和尾结点插入的，那么还有种就是不是在这两个位置插入的，当然还要排除所插入结点的位置在链表不存在的情况，具体的如下：

```typescript
  /**
   * @description 在链表中的第 index 个结点之前添加值为 val  的结点。如果 index 等于链表的长度，则该结点将附加到链表的末尾。如果 index 大于链表长度，则不会插入结点。如果index小于0，则在头部插入结点。
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else if (index > this.length) {
      // do nothing
    } else {
      let cur: SinglyListNode = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      const singlyListNode = new SinglyListNode(val, cur.next);
      cur.next = singlyListNode;
      this.length++;
    }
  }

```

### 链表的删除

讲道理，链表的插入有三种特殊的，链表的删除也应该有的，但是删除这个操作吧，就没必要搞得太繁琐，干就完事了，我不管它是谁，我删就完事了,因此我们需要写一种符合特殊位置删除的方法。

具体的思路是，如果删除的索引结点在范围内的话，那么我们就根据索引遍历，然后将其指向 next 指针的 next 指针

```typescript
  /**
   * @description 如果索引 index 有效，则删除链表中的第 index 个结点。
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {
    if (index >= 0 || index < this.length) {
      let cur = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      if (cur && cur.next) {
        cur.next = cur.next.next;
        this.length--;
      }
    }
  }

```

### 获取整个链表

有了 dummy 结点，获取整个链表就轻松很多了，一句话哈`return this.dummy;`

```typescript
  /**
   * @description 获取整个链表
   * @return {SinglyListNode}
   */
  getLinkedList(): SinglyListNode {
    return this.dummy;
  }
```

好啦， 到这里楼上关于链表的相关操作均已讲完，源代码如下：

```typescript
import SinglyListNode from './singly-list-node';
export class SinglyLinkedList {
  dummy: SinglyListNode;
  length: number;
  constructor() {
    this.dummy = new SinglyListNode();
    this.length = 0;
  }

  /**
   * @description 获取链表中第 index 个结点的值。如果索引无效，则返回-1。
   * @param {number} index
   * @return {number}
   */
  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let cur: SinglyListNode = this.dummy;
    while (index >= 0) {
      cur = cur.next!;
      index--;
    }

    return cur.val;
  }

  /**
   * @description 在链表的第一个元素之前添加一个值为 val 的结点。插入后，新结点将成为链表的第一个结点。
   * @param {number} val
   * @return {void}
   */
  addAtHead(val: number): void {
    const cur = this.dummy.next;
    const singlyListNode = new SinglyListNode(val, cur);
    this.dummy.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 将值为 val 的结点追加到链表的最后一个元素。
   * @param {number} val
   * @return {void}
   */
  addAtTail(val: number): void {
    const singlyListNode = new SinglyListNode(val);
    let cur: SinglyListNode = this.dummy;
    while (cur && cur.next) {
      cur = cur.next;
    }
    cur.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 在链表中的第 index 个结点之前添加值为 val  的结点。如果 index 等于链表的长度，则该结点将附加到链表的末尾。如果 index 大于链表长度，则不会插入结点。如果index小于0，则在头部插入结点。
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else if (index > this.length) {
      // do nothing
    } else {
      let cur: SinglyListNode = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      const singlyListNode = new SinglyListNode(val, cur.next);
      cur.next = singlyListNode;
      this.length++;
    }
  }

  /**
   * @description 如果索引 index 有效，则删除链表中的第 index 个结点。
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {
    if (index >= 0 || index < this.length) {
      let cur = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      if (cur && cur.next) {
        cur.next = cur.next.next;
        this.length--;
      }
    }
  }

  /**
   * @description 获取整个链表
   * @return {SinglyListNode}
   */
  getLinkedList(): SinglyListNode {
    return this.dummy;
  }

  /**
   * @description 转成字符串
   * @return {string}
   */
  toString(): string {
    let res: string = '';
    let cur: SinglyListNode | null = this.dummy.next;
    if (!cur) {
      return res;
    } else {
      while (cur) {
        res = `${res}, ${cur.val}`;
        cur = cur.next!;
      }
    }
    return res.slice(2);
  }
}
```

基于泛型的实现

```typescript
import { paramsType } from './type';
import SinglyListNode from './singly-list-node-generics';

export class SinglyLinkedList<T extends paramsType> {
  dummy: SinglyListNode<T>;
  length: number;
  constructor() {
    this.dummy = new SinglyListNode<T>();
    this.length = 0;
  }

  /**
   * @description 获取链表中第 index 个结点的值。如果索引无效，则返回undefined。
   * @param {number} index
   * @return {T | undefined}
   */
  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let cur: SinglyListNode<T> = this.dummy;
    while (index >= 0) {
      cur = cur.next!;
      index--;
    }

    return cur.val;
  }

  /**
   * @description 在链表的第一个元素之前添加一个值为 val 的结点。插入后，新结点将成为链表的第一个结点。
   * @param {T} val
   * @return {void}
   */
  addAtHead(val: T): void {
    const cur = this.dummy.next;
    const singlyListNode = new SinglyListNode<T>(val, cur);
    this.dummy.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 将值为 val 的结点追加到链表的最后一个元素。
   * @param {T} val
   * @return {void}
   */
  addAtTail(val: T): void {
    const singlyListNode = new SinglyListNode<T>(val);
    let cur: SinglyListNode<T> = this.dummy;
    while (cur && cur.next) {
      cur = cur.next;
    }
    cur.next = singlyListNode;
    this.length++;
  }

  /**
   * @description 在链表中的第 index 个结点之前添加值为 val  的结点。如果 index 等于链表的长度，则该结点将附加到链表的末尾。如果 index 大于链表长度，则不会插入结点。如果index小于0，则在头部插入结点。
   * @param {number} index
   * @param {T} val
   * @return {void}
   */
  addAtIndex(index: number, val: T): void {
    if (index <= 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else if (index > this.length) {
      // do nothing
    } else {
      let cur: SinglyListNode<T> = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      const singlyListNode = new SinglyListNode<T>(val, cur.next);
      cur.next = singlyListNode;
      this.length++;
    }
  }

  /**
   * @description 如果索引 index 有效，则删除链表中的第 index 个结点。
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index: number): void {
    if (index >= 0 || index < this.length) {
      let cur = this.dummy;
      while (index > 0) {
        cur = cur.next!;
        index--;
      }
      if (cur && cur.next) {
        cur.next = cur.next.next;
        this.length--;
      }
    }
  }

  /**
   * @description 获取整个链表
   * @returns {SinglyListNode<T>}
   */
  getLinkedList(): SinglyListNode<T> {
    return this.dummy;
  }

  /**
   * @description 转成字符串
   * @return {string}
   */
  toString(): string {
    let res: string = '';
    let cur: SinglyListNode<T> | null = this.dummy.next;
    if (!cur) {
      return res;
    } else {
      while (cur) {
        res = `${res}, ${cur.val}`;
        cur = cur.next!;
      }
    }
    return res.slice(2);
  }
}
```

### 链表的合并

leetcode 原题-合并两个有序的链表：`https://leetcode-cn.com/problems/merge-two-sorted-lists/`

好在是有序的链表，那么我们可以创建一个头结点，然后当两个链表结点不为空时，循环遍历里面的元素，取 list1 和 list2 中较小的值，将新结点的 next 指针指向它，最后还要判断下两个结点是不是都走完了，将没走完的结点接上去就好了。

```typescript
// code/leetcode/21-merge-two-sorted-lists.ts

import ListNode from '../base/list-node';

/**
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode | null }
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let cur = head;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 ? list1 : list2;
  return head.next;
}
```

测试用例如下：

```typescript
// /test/code/21-merge-two-sorted-lists.test.ts

import ListNode from '../../code/base/list-node';
import { mergeTwoLists } from '../../code/leetcode/21-merge-two-sorted-lists';

describe('test function mergeTwoLists:', () => {
  test('test case l1 = [], l2 = []', () => {
    const l1 = new ListNode();
    const l2 = new ListNode();
    const expected = new ListNode();
    expected.next = new ListNode();
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  });

  test('test case l1 = [], l2 = [0]', () => {
    const l1 = new ListNode();
    const l2 = new ListNode(0);
    const expected = new ListNode();
    expected.next = new ListNode(0);
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  });

  test('test case l1 = [1,2,4], l2 = [1,3,4]', () => {
    const l1 = new ListNode(1);
    const l12 = new ListNode(2);
    const l13 = new ListNode(4);
    l1.next = l12;
    l12.next = l13;

    const l2 = new ListNode(1);
    const l22 = new ListNode(3);
    const l23 = new ListNode(4);
    l2.next = l22;
    l22.next = l23;

    const expected = new ListNode(1);
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(4);
    const n5 = new ListNode(4);
    expected.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    expect(mergeTwoLists(l1, l2)).toEqual(expected);
  });
});
```

### 链表的反转

leetcode 原题-反转链表: `https://leetcode-cn.com/problems/reverse-linked-list/`

这里就是之前我们是头朝尖的那头的冰糖葫芦串，现在要屁股朝尖的那头，实际上就是改变指针的指向，所以这里需要知道先前的结点和当前的结点，这样子循环到最后一个的话就返回，这就是我们想要的答案

```typescript
// code/leetcode/206-reverse-linked-list.ts
import ListNode from '../base/list-node';

/**
 *
 * @param {ListNode | null} head
 * @return { ListNode | null}
 */

export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
```

测试用例如下：

```typescript
// test/leetcode/206-reverse-linked-list.test.ts
import ListNode from '../../code/base/list-node';
import makeListNodes from '../../code/utils/make-list-nodes';
import { reverseList } from '../../code/leetcode/206-reverse-linked-list';

describe('test function reverseList:', () => {
  test('test case head = [1, 2, 3, 4, 5]', () => {
    const head = makeListNodes([1, 2, 3, 4, 5]);
    const expected = makeListNodes([5, 4, 3, 2, 1]);
    expect(reverseList(head)).toEqual(expected);
  });

  test('test case head = [1, 2]', () => {
    const head = makeListNodes([1, 2]);
    const expected = makeListNodes([2, 1]);
    expect(reverseList(head)).toEqual(expected);
  });

  test('test case head = []', () => {
    const head = makeListNodes([]);
    const expected = makeListNodes([]);
    expect(reverseList(head)).toEqual(expected);
  });
});
```

## 参考文献

- 维基百科 - 链表：https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8

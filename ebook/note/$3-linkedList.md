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

_这里我们先定义了一个联合类型 paramsType,然后通过<T extends xx> 的方式约束泛型, 想一下为什么不直接写<T>不是更少写点代码吗？是这样子的，例如 SinglyListNode<null>, SinglyListNode<undefined>这种就不会触发编译报错，而通过上面约束泛型的形式可以避免这个问题_

### 链表的遍历

### 链表的插入

### 链表的删除

### 链表的合并

### 链表的反转

## 参考文献

- 维基百科 - 链表：https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8

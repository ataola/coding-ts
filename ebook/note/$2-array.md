# 数组

## 数组的基本概念

数组是由相同类型的元素的集合所组成的数据结构，分配一块连续的内存来存储。利用元素的索引（index）可以计算出该元素对应的存储地址，而在 JavaScript 中，数组不是以一段连续的区域存储在内存中的，而是一种哈希映射，所以说 Javascript 中的数组，并不是真正意义上的数组。

## 数组的操作方式

### 初始化

我理解的，数组的创建和初始化差不多是一个意思，为啥是差不多而不是一定，因为玄学上说的话不能说太满，然后应该是有一部分同学理解是比如创建了一个空数组，数组每一项初始化为 0，那这个时候创建和初始化确实可以分开了。我是站在一个游戏现象模型上这样定义的“从无到有”，就是你打开一个游戏，有一条进度条显示初始化进度，是一个“从无到有”的过程，我将其称之为“初始化”。

捋一捋大概就 2 种， 一种是通过字面量的形式搞，一种是通过构造函数的形式搞

楼下两种情况是等价的

```javascript
var arr = []; // 字面量的形式
var arr2 = new Array(); // 构造函数不传参数的情况

var arr3 = [1, 2, 3, 4, 5]; // 字面量的形式
var arr4 = new Array(1, 2, 3, 4, 5); // 构造函数不传参数的情况
```

那我们在构造函数传入一个参数(length)，默认造出来的数组是啥样的呢 ，它是这样的

```javascript
const arr = new Array(5);
console.log(arr); // [ <5 empty items> ]
console.log(arr[0]); // undefined
```

这个肯定不是我们期望的，比如有些场景是需要初始化具体值的，这就需要在原基础上升级了，这样造

```javascript
const arr = new Array(5).fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0 ]
console.log(arr[0]); // 0
```

### 读取

这里你也可以叫访问吧，和读取是一个意思。字面上就是该数组加上中括号和对应的下标（数组的下标是从 0 开始的），就可以读取对于的数组元素了。

### 插入

分析了下大概有三种插法，前插，后插，随便插。 都有相关的 API，读者稍微理解一下就好，不用死记硬背。

#### 前插 - unshift

```javascript
var arr = new Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]
arr.unshift(1, 2, 3);
console.log(arr); // [1, 2, 3, 0, 0, 0, 0, 0], 这里为了演示效果我就多插了几下
```

#### 后插 - push

```javascript
var arr = new Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]
arr.unshift(1, 2, 3);
console.log(arr); // [0, 0, 0, 0, 0, 1, 2, 3], 这里为了演示效果我就多插了几下
```

#### 随便插 - splice

```javascript
const arr = new Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]
arr.splice(2, 0, 1, 2, 3);
console.log(arr); // [0, 0, 1, 2, 3, 0, 0, 0], 在下标为2的索引开始，插入三个元素1， 2， 3
```

### 删除

这里也还是有 4 种，一种是 delete， 一种是 splice（是的，它除了可以任意位置插入，还可以任意位置删除）, 一种是 pop 从数组末尾删除, 一种是 shift 从数组开头删除

我们先来看下 splice 选手的，可以看到手符合我们的期望的

```javascript
const arr = new [1, 2, 3, 4, 5]();
console.log(arr); // [1, 2, 3, 4, 5]
arr.splice(2, 1);
console.log(arr); // [1, 2, 4, 5]
```

我们再来看下 delete 选手的，可以看到是不符合我们的期望的,虽然是被“删除”了，但是长度还是原来的，delete 是删除了表达式、引用类型的结果

```
const arr =[1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(delete arr[2]); // true
console.log(arr); // [ 1, 2, <1 empty item>, 4, 5 ]
```

我们再来看下 pop 选手的

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
arr.pop();
console.log(arr); // [ 1, 2, 3, 4 ]
```

我们再来看看 shift 选手的

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
arr.shift();
console.log(arr); // [2, 3, 4, 5]
```

### 修改

同楼上的读取，就是找到对应下标赋上新值， 这里没有相关的静态类型约束，随便改啦。

### 查找

这个比如我要找倒数组中元素为 2 的下标，那么我只需要遍历判断下对应下标的元素的值是不是等于 2 就好了。

```javascript
const arr = [1, 2, 3, 4, 5, 2];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    console.log(i);
  }
}

// 1 5
```

### 遍历

总结了下大概有 5 种， for、 for in、 for of、 forEach 和 map。

for 循环是最常见的遍历方式，大部分语言都是通用的，保险点就用它

```javascript
const arr = [1, 2, 3, 4, 5, 2];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}
```

for in 是遍历对应的 key 的

```javascipt
const arr = [1, 2, 3, 4, 5, 2];
for (let key in arr) {
  console.log(key, arr[key]);
}
```

for of 是遍历对应的 value 的

```javascript
const arr = [1, 2, 3, 4, 5, 2];
for (let value of arr) {
  console.log(value);
}
```

forEach 大部分语言也有，比较普遍，尽量不要去用，因为退不出循环，当一大片代码里面有好多个这种的，除了 bug 不易于排查。

```
const arr = [1, 2, 3, 4, 5, 2];
arr.forEach((value, index) => {
  if (index === 2) {
    return;
  }
  console.log(index, value);
});

```

### 迭代和迭代器函数

迭代，比较经典的就是斐波那契数列了, 通过前面的值去推导后面的值

```javascript
const fibonacci = [1, 1, 2];

function fib(n) {
  if (n <= 2) {
    return fibonacci[n];
  }

  for (let i = 3; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci[n];
}

for (let i = 0; i < 10; i++) {
  console.log(fib(i));
}
```

ES6 为数组增加了一个@@iterator 属性，可通过 Symbol.iterator 来访问, 这里故意取到等号，当执行第 11 次`iterator.next().value`的时候，值为 undefined，因为迭代完了。

```javascript
const arr = [7, 2, 4, 5, 9, 6, 3, 8, 10, 1];
let iterator = arr[Symbol.iterator]();
for (let i = 0; i <= arr.length; i++) {
  console.log(iterator.next().value);
}
```

这里还可以通过 for...of 循环迭代

```javascript
const arr = [7, 2, 4, 5, 9, 6, 3, 8, 10, 1];
let iterator = arr[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
}
```

entries 方法返回包含键值对的@@iterator

```javascript
const arr = [7, 2, 4, 5, 9, 6, 3, 8, 10, 1];
let iterator = arr.entries();
for (let i = 0; i < arr.length; i++) {
  console.log(iterator.next().value);
}
```

这里还可以通过 for...of 循环迭代

```javascript
const arr = [7, 2, 4, 5, 9, 6, 3, 8, 10, 1];
let iterator = arr.entries();

for (const item of iterator) {
  console.log(item);
}
```

此外还有， keys 方法返回包含数组索引的@@iterator， values 方法返回包含数组的值的@@iterator 。这里就不作展开了，读者有兴趣可以了解学习下。

### 置空

一句话哈 `arr.length = 0 // now arr is []`

### 交换位置

一句话哈 `[arr[i], arr[j]] = [arr[j], arr[i]]`

### 合并数组

一句话哈 `arr.concat(arr1)`, concat 方法返回合并后的数组，但其不改变数组本身。

```javascript
const arr = [1, 2, 3];
const arr1 = [4, 5, 6];
console.log(arr.concat(arr1)); // [1, 2, 3, 4, 5, 6]
console.log(arr); // [1, 2, 3]
console.log(arr1); // [4, 5, 6]
```

### 打乱数组

一句话哈， `arr.sort((a, b) => Math.random() - 0.5)`

我们来看个例子

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort((a, b) => Math.random() - 0.5);
console.log(arr.toString()); // 7,2,4,5,9,6,3,8,10,1, 每次都不一样
```

### 排序

一句话哈， `arr.sort((a, b) => a - b)`

我们来看下这个例子

```javascript
const arr = [7, 2, 4, 5, 9, 6, 3, 8, 10, 1];
arr.sort((a, b) => a - b);
console.log(arr.toString()); // 1,2,3,4,5,6,7,8,9,10
```

### 反转

一句话哈， `arr.reverse()`

### 转字符串

一句话哈， `arr.join('')` 或者 `arr.toString()`, 后者每个元素中间有逗号连接

_因为这里是讲数构和算法，所以不过多介绍 JS 数组相关操作的 API，高阶函数这一块了。_

## 二维数组和多维数组

二维数组跟矩阵是一个意思，矩阵在生活中很常见，比如下围棋的棋盘， 比如开运动会走过主席台的每一个方块。

二维数组的初始化是这样子的

```javascript
const arr = new Array(5); // 注意这里不要写成 const arr = new Array(5).fill([]) 因为js中的数组是引用类型
for (let i = 0; i < arr.length; i++) {
  arr[i] = [];
}
arr[0][0] = 1;
console.log(arr); // [ [ 1 ], [], [], [], [] ]
```

多维数组这里以三维数组举例， 其实也很常见，比如要记录正方体的点的坐标，那么就要用到三维坐标系，把 x 轴、y 轴、z 轴的值记录到数组中，就是三维数组啦。

## typescript 中定义数组

用 const 或者 let 声明相关的数组变量， `const variableName: <type>[]`， 例如 `const arr:number[] = []`

## 参考文献

- 维基百科 - 数组： https://zh.wikipedia.org/wiki/%E6%95%B0%E7%BB%84
- MDN - 数组： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

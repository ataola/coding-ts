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

这里也还是有 2 种，一种是 delete， 一种是 splice（是的，它除了可以任意位置插入，还可以任意位置删除）

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

### 迭代

比较经典的就是斐波那契数列了

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

### 置空

一句话哈 `arr.length = 0 // now arr is []`

### 二维数组和多维数组

## 参考文献

- 维基百科-数组： https://zh.wikipedia.org/wiki/%E6%95%B0%E7%BB%84

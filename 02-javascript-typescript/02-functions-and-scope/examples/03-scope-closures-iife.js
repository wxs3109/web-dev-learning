// ============================================================
// 03 — 作用域、闭包与 IIFE (Scope, Closures, and IIFE)
//
// 在终端运行: node 03-scope-closures-iife.js
//
// 本文件涵盖：
//   1. 作用域概念 (Global / Function / Block Scope)
//   2. 词法作用域 (Lexical Scope)
//   3. 作用域链 (Scope Chain)
//   4. 闭包 (Closures)
//   5. 闭包的常见应用
//   6. IIFE (Immediately Invoked Function Expression)
//
// 核心思想：
//   "作用域"决定了变量在哪里可以被访问。
//   "闭包"是函数 + 它记住的外层作用域变量的组合。
//   理解这两者是掌握 JavaScript 的关键。
// ============================================================


// ============================================================
// PART 1 — 作用域类型 (Scope Types)
//
// 三种作用域：
//   1. 全局作用域 (Global Scope)：在任何函数/块之外声明的变量
//   2. 函数作用域 (Function Scope)：在函数内部声明的变量
//   3. 块作用域 (Block Scope, ES6)：let/const 在 {} 内声明的变量
//
// var vs let/const 的作用域区别：
//   - var：只有函数作用域，没有块作用域（会"泄漏"到块外面）
//   - let/const：有块作用域（更安全、更可控）
// ============================================================

console.log("========== PART 1: 作用域类型 ==========\n");

// 全局作用域
const globalVar = "我是全局变量";

function demoFunctionScope() {
  // 函数作用域
  const funcVar = "我是函数变量";
  console.log("函数内访问全局变量:", globalVar);   // ✔
  console.log("函数内访问函数变量:", funcVar);      // ✔
}
demoFunctionScope();
// console.log(funcVar);  // ✗ ReferenceError! 函数外无法访问

// 块作用域（let/const vs var）
{
  let blockLet = "let 块作用域";
  const blockConst = "const 块作用域";
  var blockVar = "var 没有块作用域"; // ⚠️ var 会泄漏！
  console.log("块内:", blockLet, blockConst, blockVar);
}
// console.log(blockLet);    // ✗ ReferenceError
// console.log(blockConst);  // ✗ ReferenceError
console.log("块外 var:", blockVar); // ✔ "var 没有块作用域" — var 泄漏了！

// 实际影响：for 循环中的 var vs let
console.log("\nvar 在 for 循环中的问题:");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("  var i =", i), 0);
}
// 输出 3, 3, 3  ← 因为 var 只有一个 i，循环结束后 i === 3

console.log("let 在 for 循环中的正确行为:");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("  let j =", j), 10);
}
// 输出 0, 1, 2  ← 因为 let 每次循环创建新的 j


// ============================================================
// PART 2 — 词法作用域 (Lexical Scope)
//
// JavaScript 使用"词法作用域"（也叫"静态作用域"）。
//
// 含义：变量的作用域在代码编写时就确定了（看代码结构），
//       而不是在运行时由调用位置决定。
//
// 内层函数可以访问外层函数的变量，反之不行。
// ============================================================

console.log("\n========== PART 2: 词法作用域 ==========\n");

const appName = "学习应用";

function outer() {
  const outerValue = "外层的值";

  function middle() {
    const middleValue = "中层的值";

    function inner() {
      const innerValue = "内层的值";
      // inner 可以访问所有外层的变量
      console.log("inner 看到:", innerValue, middleValue, outerValue, appName);
    }

    inner();
    // console.log(innerValue);  // ✗ 无法访问内层变量
  }

  middle();
}

outer();

// 关键理解：作用域是"写代码时"就确定的，不是"运行时"
function createGreeter() {
  const greeting = "你好";  // 这个变量在这里定义
  return function (name) {
    // 即使这个函数在其他地方被调用，它仍然能访问 greeting
    // 因为词法作用域看的是代码结构，不是调用位置
    return `${greeting}, ${name}！`;
  };
}

const greeter = createGreeter();
// greeting 变量已经离开了 createGreeter 的执行上下文
// 但返回的函数仍然记得它 → 这就是闭包！
console.log(greeter("Alice"));


// ============================================================
// PART 3 — 作用域链 (Scope Chain)
//
// 当 JavaScript 引擎查找一个变量时：
//   1. 先在当前作用域找
//   2. 找不到就往外层作用域找
//   3. 一直找到全局作用域
//   4. 全局都找不到 → ReferenceError
//
// 这个查找路径就是"作用域链"。
// ============================================================

console.log("\n========== PART 3: 作用域链 ==========\n");

const level0 = "全局";

function levelOne() {
  const level1 = "L1";

  function levelTwo() {
    const level2 = "L2";

    function levelThree() {
      const level3 = "L3";
      // 作用域链：levelThree → levelTwo → levelOne → 全局
      console.log("L3 看到:", level3, level2, level1, level0);
    }

    levelThree();
  }

  levelTwo();
}

levelOne();

// 变量遮蔽 (Shadowing)：内层定义了同名变量，会遮蔽外层的
const color = "red";

function paintRoom() {
  const color = "blue"; // 遮蔽了全局的 color
  console.log("房间颜色:", color); // "blue"

  function paintWall() {
    const color = "green"; // 遮蔽了 paintRoom 的 color
    console.log("墙壁颜色:", color); // "green"
  }

  paintWall();
}

paintRoom();
console.log("全局颜色:", color); // "red" ← 不受影响


// ============================================================
// PART 4 — 闭包 (Closures)
//
// 闭包 = 函数 + 它能访问的外层作用域中的变量
//
// 关键特性：
//   - 函数会"记住"自己被创建时的作用域环境
//   - 即使外层函数已经执行完毕，内层函数仍然可以访问外层变量
//   - 每次调用外层函数，都会创建独立的闭包环境
//
// 这是 JavaScript 最重要的特性之一。
// ============================================================

console.log("\n========== PART 4: 闭包 ==========\n");

// 经典示例：计数器
function makeCounter(start = 0) {
  let count = start; // 这个变量被内层函数"关住"了

  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; },
  };
}

const counterA = makeCounter(10);
console.log("A 递增:", counterA.increment()); // 11
console.log("A 递增:", counterA.increment()); // 12
console.log("A 递减:", counterA.decrement()); // 11

// 每次调用 makeCounter 都创建独立的闭包
const counterB = makeCounter(100);
console.log("B 递增:", counterB.increment()); // 101
console.log("A 当前:", counterA.getCount());   // 11 ← 互不影响

// 闭包保持的是对变量的引用（不是值的快照）
function createAccumulator() {
  let total = 0;
  return function (amount) {
    total += amount; // 每次调用都修改同一个 total
    return total;
  };
}

const acc = createAccumulator();
console.log("累加 10:", acc(10)); // 10
console.log("累加 20:", acc(20)); // 30
console.log("累加 5:", acc(5));   // 35


// ============================================================
// PART 5 — 闭包的常见应用
//
// 1. 数据封装（模拟私有变量）
// 2. 函数工厂
// 3. 记忆化 (Memoization)
// 4. 事件处理器 / 回调
// ============================================================

console.log("\n========== PART 5: 闭包的常见应用 ==========\n");

// 应用 1：数据封装（模拟私有变量）
// JavaScript 没有真正的 private 关键字（在 class 之外），
// 但闭包可以实现类似效果
function createBankAccount(initialBalance) {
  let balance = initialBalance; // "私有"变量

  return {
    deposit(amount) {
      if (amount <= 0) return "金额必须为正";
      balance += amount;
      return `存入 ${amount}，余额 ${balance}`;
    },
    withdraw(amount) {
      if (amount > balance) return "余额不足";
      balance -= amount;
      return `取出 ${amount}，余额 ${balance}`;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));    // "存入 500，余额 1500"
console.log(account.withdraw(200));   // "取出 200，余额 1300"
console.log(account.getBalance());    // 1300
// console.log(account.balance);      // undefined! 无法直接访问

// 应用 2：函数工厂
function createFormatter(prefix, suffix = "") {
  return function (value) {
    return `${prefix}${value}${suffix}`;
  };
}

const formatCurrency = createFormatter("¥", " 元");
const formatPercent = createFormatter("", "%");
console.log(formatCurrency(99.9));   // "¥99.9 元"
console.log(formatPercent(85));       // "85%"

// 应用 3：简单的记忆化 (Memoization)
function memoize(fn) {
  const cache = {}; // 闭包中的缓存
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log(`  (缓存命中: ${key})`);
      return cache[key];
    }
    console.log(`  (计算中: ${key})`);
    cache[key] = fn(...args);
    return cache[key];
  };
}

const expensiveAdd = memoize((a, b) => a + b);
console.log("第一次:", expensiveAdd(3, 4));  // 计算中
console.log("第二次:", expensiveAdd(3, 4));  // 缓存命中
console.log("新参数:", expensiveAdd(5, 6));  // 计算中


// ============================================================
// PART 6 — IIFE (Immediately Invoked Function Expression)
//
// 语法：(function() { ... })(); 或 (() => { ... })();
//
// 作用：
//   - 创建一个独立的作用域，避免污染全局命名空间
//   - 定义后立即执行，不留下函数名
//   - 在 ES6 之前，是模块化的主要手段
//   - 现在仍然在某些场景下有用（比如初始化代码）
// ============================================================

console.log("\n========== PART 6: IIFE ==========\n");

// 基本语法
(function () {
  const privateToken = "这个变量外面访问不到";
  console.log("IIFE 执行了:", privateToken);
})();

// console.log(privateToken);  // ✗ ReferenceError

// 箭头函数版 IIFE
(() => {
  const tempConfig = { mode: "init" };
  console.log("箭头 IIFE:", tempConfig);
})();

// IIFE 可以有返回值
const dbConfig = (function () {
  const host = "localhost";
  const port = 5432;
  return { host, port, url: `postgres://${host}:${port}` };
})();
console.log("IIFE 返回值:", dbConfig);

// IIFE 可以接收参数
(function (name, version) {
  console.log(`${name} v${version} 初始化完成`);
})("MyApp", "1.0.0");

// 实际用途示意：避免全局变量冲突
// 假设两个脚本都有一个叫 utils 的变量
const moduleA = (function () {
  const utils = { format: (s) => s.toUpperCase() };
  return { format: utils.format };
})();

const moduleB = (function () {
  const utils = { format: (s) => s.toLowerCase() };
  return { format: utils.format };
})();

console.log("moduleA:", moduleA.format("Hello")); // "HELLO"
console.log("moduleB:", moduleB.format("Hello")); // "hello"
// 两个 utils 互不干扰


console.log("\n最佳实践总结：");
console.log("  - 优先用 let/const（块作用域），避免 var（函数作用域）");
console.log("  - 理解词法作用域：变量查找看代码结构，不看调用位置");
console.log("  - 闭包用于数据封装、工厂函数、缓存等场景");
console.log("  - 注意闭包保持的是引用，不是值的快照");
console.log("  - IIFE 用于创建独立作用域和初始化代码\n");

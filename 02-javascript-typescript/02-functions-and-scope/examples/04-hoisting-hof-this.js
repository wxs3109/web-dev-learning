// ============================================================
// 04 — 提升、高阶函数与 this (Hoisting, HOF, and this)
//
// 在终端运行: node 04-hoisting-hof-this.js
//
// 本文件涵盖：
//   1. 提升 (Hoisting) — function / var / let / const
//   2. 暂时性死区 (Temporal Dead Zone, TDZ)
//   3. 高阶函数 (Higher-Order Functions)
//   4. 常用内置高阶函数 (map / filter / reduce / forEach)
//   5. this 关键字的五种绑定规则
//   6. 箭头函数的 this
//
// 核心思想：
//   "提升"影响变量和函数的可用时机。
//   "高阶函数"是函数式编程的基石。
//   "this"是 JavaScript 最令人困惑的概念之一——
//   理解它的五种绑定规则能避免大量 bug。
// ============================================================


// ============================================================
// PART 1 — 提升 (Hoisting)
//
// JavaScript 引擎在执行代码之前会先"扫描"所有声明，
// 把它们"提升"到作用域的顶部。但不同声明的提升行为不同：
//
// | 声明类型            | 提升行为                              |
// |---------------------|---------------------------------------|
// | function 声明       | 整体提升（声明 + 函数体都可用）       |
// | var                 | 只提升声明，初始化为 undefined         |
// | let / const         | 提升但不初始化 → 进入 TDZ（暂时性死区）|
// | class               | 和 let/const 一样，有 TDZ              |
// | 函数表达式          | 跟随变量声明的规则（var/let/const）     |
// ============================================================

console.log("========== PART 1: 提升 ==========\n");

// 1. function 声明：整体提升，可以在声明之前调用
console.log("提前调用 multiply:", multiply(2, 3)); // 6 ✔

function multiply(a, b) {
  return a * b;
}

// 2. var：声明被提升，但值为 undefined
console.log("var 提升:", legacyValue); // undefined（不是 ReferenceError）
var legacyValue = "现在才赋值";
console.log("var 赋值后:", legacyValue); // "现在才赋值"

// 3. let/const：提升但进入 TDZ，在声明之前访问会报错
// console.log(modernValue);  // ✗ ReferenceError: Cannot access before initialization
const modernValue = "声明后才可用";
console.log("const 声明后:", modernValue);

// 4. 函数表达式的提升取决于用什么声明
// console.log(exprFn);  // 如果用 var → undefined；用 let/const → ReferenceError
const exprFn = function () {
  return "我是函数表达式";
};
console.log("函数表达式:", exprFn());


// ============================================================
// PART 2 — 暂时性死区 (Temporal Dead Zone, TDZ)
//
// 从作用域开始到 let/const 声明语句之间的区域叫"TDZ"。
// 在 TDZ 内访问变量会抛出 ReferenceError。
//
// 为什么要有 TDZ？
//   - 让 bug 更早暴露（比 var 的 undefined 更安全）
//   - 强制"先声明，后使用"的编程习惯
// ============================================================

console.log("\n========== PART 2: 暂时性死区 (TDZ) ==========\n");

// TDZ 演示
function tdzDemo() {
  // --- TDZ 开始 ---
  // console.log(x);  // ✗ ReferenceError!

  // --- TDZ 结束 ---
  let x = 10;
  console.log("TDZ 后访问 x:", x); // 10 ✔
}
tdzDemo();

// typeof 在 TDZ 中也会报错（这和 var 不同！）
// function typeofTdz() {
//   console.log(typeof y);  // ✗ ReferenceError
//   let y = 20;
// }

// 对比 var 的 typeof：不会报错
function typeofVar() {
  console.log("typeof 未声明的 var:", typeof undeclaredVar); // "undefined"
}
typeofVar();


// ============================================================
// PART 3 — 高阶函数 (Higher-Order Functions, HOF)
//
// 高阶函数是指满足以下任一条件的函数：
//   1. 接收函数作为参数
//   2. 返回一个函数作为结果
//
// 高阶函数是函数式编程的核心。
// 因为 JavaScript 中函数是"一等公民"，所以天然支持高阶函数。
// ============================================================

console.log("\n========== PART 3: 高阶函数 ==========\n");

// 接收函数作为参数
function applyOperation(a, b, operationFn) {
  return operationFn(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const power = (x, y) => x ** y;

console.log("add:", applyOperation(10, 3, add));       // 13
console.log("subtract:", applyOperation(10, 3, subtract)); // 7
console.log("power:", applyOperation(2, 8, power));    // 256

// 返回函数作为结果
function createMultiplier(factor) {
  return (x) => x * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log("double(5):", double(5));   // 10
console.log("triple(5):", triple(5));   // 15

// 同时接收函数 + 返回函数
function compose(f, g) {
  return (x) => f(g(x));
}

const addOne = (x) => x + 1;
const square = (x) => x * x;
const addOneThenSquare = compose(square, addOne); // 先 +1，再平方
console.log("compose(square, addOne)(4) =", addOneThenSquare(4)); // (4+1)² = 25


// ============================================================
// PART 4 — 常用内置高阶函数
//
// 数组提供了很多高阶函数方法：
//   - map：转换每个元素，返回新数组
//   - filter：筛选元素，返回新数组
//   - reduce：累积计算，返回单个值
//   - forEach：遍历执行，无返回值
//   - find：找到第一个满足条件的元素
//   - some / every：判断是否存在 / 全部满足条件
//   - sort：排序（会修改原数组！）
// ============================================================

console.log("\n========== PART 4: 内置高阶函数 ==========\n");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map：对每个元素做转换
const squared = numbers.map((n) => n * n);
console.log("map (平方):", squared);
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// filter：筛选满足条件的元素
const evens = numbers.filter((n) => n % 2 === 0);
console.log("filter (偶数):", evens);
// [2, 4, 6, 8, 10]

// reduce：累积运算
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("reduce (求和):", sum); // 55

// reduce 实现求最大值
const max = numbers.reduce((m, n) => (n > m ? n : m), -Infinity);
console.log("reduce (最大值):", max); // 10

// find：找第一个满足条件的
const firstOver5 = numbers.find((n) => n > 5);
console.log("find (>5):", firstOver5); // 6

// some / every
console.log("some >5:", numbers.some((n) => n > 5));   // true
console.log("every >0:", numbers.every((n) => n > 0));  // true
console.log("every >5:", numbers.every((n) => n > 5));  // false

// 链式调用：先筛选偶数，再平方，最后求和
const result = numbers
  .filter((n) => n % 2 === 0)    // [2, 4, 6, 8, 10]
  .map((n) => n * n)              // [4, 16, 36, 64, 100]
  .reduce((sum, n) => sum + n, 0); // 220
console.log("链式调用结果:", result);

// forEach：遍历（无返回值，不能链式调用）
console.log("forEach:");
[10, 20, 30].forEach((val, idx) => {
  console.log(`  索引 ${idx}: 值 ${val}`);
});


// ============================================================
// PART 5 — this 关键字的五种绑定规则
//
// this 的值取决于函数的调用方式（不是定义位置！）
//
// 五种规则（优先级从高到低）：
//   1. new 绑定：new Fn() → this = 新创建的对象
//   2. 显式绑定：call / apply / bind → this = 指定的对象
//   3. 隐式绑定：obj.method() → this = 调用的对象 (obj)
//   4. 默认绑定：独立调用 fn() → this = globalThis（严格模式下 undefined）
//   5. 箭头函数：没有自己的 this，继承外层作用域的 this
// ============================================================

console.log("\n========== PART 5: this 关键字 ==========\n");

// 规则 3：隐式绑定 — obj.method() 中 this = obj
const user = {
  name: "Wenbo",
  greet() {
    console.log(`隐式绑定: this.name = ${this.name}`);
  },
};
user.greet(); // "Wenbo"

// ⚠️ 隐式绑定丢失：把方法赋值给变量后，this 丢失
const greetFn = user.greet;
// greetFn();  // 默认绑定: this.name = undefined（非严格模式下是 globalThis）

// 规则 2：显式绑定 — call / apply / bind
function introduce(greeting) {
  console.log(`${greeting}, 我是 ${this.name}`);
}

const alice = { name: "Alice" };
const bob = { name: "Bob" };

// call：立即调用，参数逐个传
introduce.call(alice, "你好");       // "你好, 我是 Alice"

// apply：立即调用，参数用数组传
introduce.apply(bob, ["嗨"]);        // "嗨, 我是 Bob"

// bind：返回新函数，不立即调用
const aliceIntro = introduce.bind(alice, "Hello");
aliceIntro();                         // "Hello, 我是 Alice"

// bind 的实际用途：固定回调中的 this
const timer = {
  seconds: 0,
  start() {
    // 用 bind 固定 this
    setInterval(
      function () {
        this.seconds++;
        if (this.seconds <= 3) {
          console.log(`  计时器(bind): ${this.seconds}s`);
        }
      }.bind(this),
      100
    );
  },
};
// timer.start();  // 注释掉避免持续输出

// 规则 1：new 绑定
function Person(name, age) {
  // new 调用时，this = 新创建的空对象 {}
  this.name = name;
  this.age = age;
  // 隐式 return this
}

const person = new Person("Carol", 28);
console.log("new 绑定:", person); // Person { name: 'Carol', age: 28 }


// ============================================================
// PART 6 — 箭头函数的 this（词法 this）
//
// 箭头函数没有自己的 this！
// 它会"继承"定义时所在的外层作用域的 this。
// 这个行为叫"词法 this"(Lexical this)。
//
// 重要区别：
//   - 普通函数：this 在调用时确定（看谁调用的）
//   - 箭头函数：this 在定义时确定（看在哪里写的）
//
// 最佳实践：
//   - 对象方法 → 用普通函数（需要 this 指向对象）
//   - 回调函数 → 用箭头函数（不想 this 改变）
// ============================================================

console.log("\n========== PART 6: 箭头函数的 this ==========\n");

const team = {
  name: "前端团队",
  members: ["Alice", "Bob", "Carol"],

  // ✔ 用普通函数定义方法（this = team）
  showMembers() {
    console.log(`${this.name} 的成员:`);

    // ✔ 回调中用箭头函数（this 继承自 showMembers，即 team）
    this.members.forEach((member) => {
      console.log(`  - ${member} (属于 ${this.name})`);
    });
  },

  // ✗ 用箭头函数定义方法（this 不是 team！而是外层作用域的 this）
  showMembersWrong: () => {
    // 这里 this 是模块/全局的 this，不是 team
    console.log("wrong this.name:", typeof globalThis !== "undefined" ? "非 team" : undefined);
  },
};

team.showMembers();
team.showMembersWrong();

// 对比示例：setTimeout 中的 this
const clock = {
  time: "12:00",

  // 问题：普通函数回调中 this 丢失
  showTimeWrong() {
    setTimeout(function () {
      // this 在这里不是 clock，而是 globalThis（或 undefined）
      console.log("普通函数回调 this.time:", this.time); // undefined
    }, 0);
  },

  // 解决方案 1：箭头函数
  showTimeArrow() {
    setTimeout(() => {
      // 箭头函数继承 showTimeArrow 的 this = clock
      console.log("箭头函数回调 this.time:", this.time); // "12:00"
    }, 5);
  },

  // 解决方案 2：提前保存 this（ES5 常见写法）
  showTimeSelf() {
    const self = this; // 把 this 保存到变量
    setTimeout(function () {
      console.log("self.time:", self.time); // "12:00"
    }, 10);
  },
};

clock.showTimeWrong();
clock.showTimeArrow();
clock.showTimeSelf();

// 等待 setTimeout 执行完毕
setTimeout(() => {
  console.log("\n最佳实践总结：");
  console.log("  - 函数声明会整体提升，var 只提升声明（值为 undefined）");
  console.log("  - let/const 有 TDZ，强制先声明后使用");
  console.log("  - 多用高阶函数（map/filter/reduce）代替 for 循环");
  console.log("  - 链式调用让数据处理更清晰: .filter().map().reduce()");
  console.log("  - 对象方法用普通函数（需要 this），回调用箭头函数（继承 this）");
  console.log("  - 理解 this 的五种规则：new > 显式 > 隐式 > 默认 > 箭头\n");
}, 50);

// ============================================================
// 01 — 函数基础 (Function Basics)
//
// 在终端运行: node 01-function-basics.js
//
// 本文件涵盖：
//   1. 函数声明 (Function Declaration)
//   2. 函数表达式 (Function Expression)
//   3. 箭头函数 (Arrow Function)
//   4. 三种写法的区别对比
//   5. 返回值 (Return Values)
//
// 核心思想：
//   在 JavaScript 中，函数是"一等公民"(first-class citizen)。
//   这意味着函数可以：
//     - 赋值给变量
//     - 作为参数传给其他函数
//     - 作为返回值从函数中返回
//   这个特性是后面学习回调、闭包、高阶函数的基础。
// ============================================================


// ============================================================
// PART 1 — 函数声明 (Function Declaration)
//
// 语法：function 函数名(参数) { 函数体 }
//
// 特点：
//   - 会被"提升" (hoisting)：可以在声明之前调用
//   - 有自己的 this（根据调用方式动态绑定）
//   - 有 arguments 对象（类数组，保存所有传入的参数）
//   - 可以用 new 调用（作为构造函数）
// ============================================================

console.log("========== PART 1: 函数声明 ==========\n");

// 可以在声明之前调用！（因为函数声明会被整体提升到作用域顶部）
console.log("提前调用:", greet("Alice"));

function greet(name) {
  return `Hello, ${name}!`;
}

console.log("正常调用:", greet("Bob"));

// 多个参数
function add(a, b) {
  return a + b;
}
console.log("add(3, 5) =", add(3, 5));   // 8

// 参数个数不匹配时：
// 多传的参数会被忽略，少传的参数值为 undefined
console.log("add(3) =", add(3));           // NaN (3 + undefined = NaN)
console.log("add(1,2,3) =", add(1, 2, 3));// 3  (第三个参数被忽略)

// 没有 return 的函数默认返回 undefined
function logOnly(message) {
  console.log("logOnly:", message);
  // 没有 return
}
const result = logOnly("I print but do not return.");
console.log("result from logOnly =", result);   // undefined

// 函数也是值！typeof 返回 "function"
console.log("typeof greet:", typeof greet);       // "function"


// ============================================================
// PART 2 — 函数表达式 (Function Expression)
//
// 语法：const 变量名 = function(参数) { 函数体 };
//
// 特点：
//   - 不会被提升！在赋值语句之前调用会报 ReferenceError
//   - 可以是匿名函数（最常见），也可以有名字
//   - 赋值给变量后，通过变量名调用
//
// 什么时候用？
//   - 当你想把函数赋给变量、传给另一个函数、或不需要提升时
// ============================================================

console.log("\n========== PART 2: 函数表达式 ==========\n");

// 匿名函数表达式（最常见的形式）
const multiply = function (a, b) {
  return a * b;
};
console.log("multiply(3, 4) =", multiply(3, 4));   // 12

// 具名函数表达式（名字只在函数内部可用，常用于递归和调试）
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // 函数内部可以用 fact 调用自己
};
console.log("factorial(5) =", factorial(5));         // 120
// console.log(fact);  // ✗ ReferenceError! fact 在外部不可用

// ⚠️ 函数表达式不会提升
// console.log(square(3));  // ✗ ReferenceError: Cannot access 'square' before initialization
const square = function (x) {
  return x * x;
};
console.log("square(4) =", square(4));               // 16


// ============================================================
// PART 3 — 箭头函数 (Arrow Function, ES6)
//
// 语法：(参数) => { 函数体 }
//
// 特点（和普通函数的区别）：
//   ✔ 语法更简洁
//   ✗ 没有自己的 this（继承外层作用域的 this）
//   ✗ 没有 arguments 对象
//   ✗ 不能用 new 调用（不能作为构造函数）
//   ✗ 不会被提升
//
// 简写规则：
//   1. 只有一个参数 → 可以省略括号：x => x * 2
//   2. 函数体只有一个表达式 → 可以省略 {} 和 return
//   3. 返回对象字面量 → 必须用括号包裹：() => ({ key: value })
// ============================================================

console.log("\n========== PART 3: 箭头函数 ==========\n");

// 完整写法
const divide = (a, b) => {
  return a / b;
};
console.log("divide(10, 3) =", divide(10, 3));

// 简写 1：函数体只有一个表达式 → 省略 {} 和 return
const double = (x) => x * 2;
console.log("double(7) =", double(7)); // 14

// 简写 2：只有一个参数 → 还可以省略括号
const triple = (x) => x * 3;
console.log("triple(5) =", triple(5)); // 15

// 没有参数时，必须写空括号
const getTime = () => new Date().toLocaleTimeString();
console.log("getTime() =", getTime());

// ⚠️ 返回对象字面量时，必须用 () 包裹
// 因为 {} 会被解析器当成函数体的花括号
const makeUser = (name, age) => ({ name, age });
console.log("makeUser:", makeUser("Alice", 25));
// { name: 'Alice', age: 25 }

// 常见错误示意：
// const bad = (name) => { name };     // 返回 undefined! {} 是函数体
// const good = (name) => ({ name });  // 返回 { name: "..." } ✔

// 箭头函数最适合用在回调中
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((x) => x * 2);
console.log("map 回调:", doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter((x) => x % 2 === 0);
console.log("filter 回调:", evens); // [2, 4]


// ============================================================
// PART 4 — 三种函数的区别对比
//
// |              | 声明(declaration) | 表达式(expression) | 箭头(arrow)  |
// |--------------|-------------------|-------------------|-------------|
// | 提升         | ✔                 | ✗                 | ✗           |
// | this         | 动态绑定           | 动态绑定           | 继承外层     |
// | arguments    | ✔                 | ✔                 | ✗           |
// | 构造函数(new) | ✔                 | ✔                 | ✗           |
// | 适合场景     | 通用/工具函数       | 赋值/回调          | 短回调/链式  |
// ============================================================

console.log("\n========== PART 4: 区别对比 ==========\n");

// arguments 对象 —— 声明和表达式有，箭头函数没有
function showArgs() {
  // arguments 是类数组对象，包含所有传入的参数
  console.log("arguments:", Array.from(arguments));
}
showArgs(1, 2, 3); // [1, 2, 3]

// 箭头函数没有 arguments，要用 rest 参数代替
const arrowWithRest = (...args) => {
  console.log("rest 参数代替 arguments:", args);
};
arrowWithRest(4, 5, 6); // [4, 5, 6]


// ============================================================
// PART 5 — 返回值进阶 (Return Values)
//
// - 函数可以返回任何类型的值（数字、字符串、对象、数组、甚至另一个函数）
// - 没有 return 语句 → 返回 undefined
// - return 后面的代码不会执行
// - 可以用 return 提前退出函数（guard clause 模式）
// ============================================================

console.log("\n========== PART 5: 返回值进阶 ==========\n");

// 返回对象
function createProduct(name, price) {
  return { name, price, createdAt: new Date().toISOString() };
}
console.log("返回对象:", createProduct("键盘", 299));

// 返回函数（这是闭包和高阶函数的基础，03/04 文件会深入）
function createMultiplier(factor) {
  return (x) => x * factor;
}
const times5 = createMultiplier(5);
console.log("返回函数: times5(3) =", times5(3)); // 15

// Guard clause 模式：用 return 提前退出，避免深层嵌套
function processAge(age) {
  if (typeof age !== "number") return "请传入数字";
  if (age < 0) return "年龄不能为负数";
  if (age < 18) return "未成年";
  return "成年人";
}
console.log('processAge("abc") →', processAge("abc")); // "请传入数字"
console.log("processAge(-1)    →", processAge(-1)); // "年龄不能为负数"
console.log("processAge(15)    →", processAge(15)); // "未成年"
console.log("processAge(25)    →", processAge(25)); // "成年人"

console.log("\n最佳实践总结：");
console.log("  - 简短回调 → 箭头函数：arr.map(x => x * 2)");
console.log("  - 对象方法 → function 声明/表达式（需要自己的 this）");
console.log("  - 独立工具函数 → function 声明（可以提升，方便组织代码）");
console.log("  - 用 guard clause 代替 if-else 深嵌套\n");

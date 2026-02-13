// ============================================================
// 01 — 变量与数据类型 (Variables & Data Types)
//
// 在终端运行: node 01-variables-and-types.js
//
// 本文件涵盖：
//   1. var, let, const 三种声明方式的区别
//   2. JavaScript 的 7 种原始类型 + 1 种引用类型
//   3. typeof 运算符
//   4. 类型检查的坑（gotchas）
// ============================================================


// ============================================================
// PART 1 — var, let, const
//
// JavaScript 有三种声明变量的方式。
// 现代代码中几乎只用 let 和 const，var 已经过时了。
//
//            | 可重新赋值? | 可重复声明? | 作用域    | 提升(hoisting)?
// -----------|------------|-----------|----------|----------------
//   var      |    ✔       |    ✔      | 函数作用域 | ✔ (值为 undefined)
//   let      |    ✔       |    ✗      | 块作用域   | ✔ (暂时性死区 TDZ)
//   const    |    ✗       |    ✗      | 块作用域   | ✔ (暂时性死区 TDZ)
// ============================================================

console.log("========== PART 1: var, let, const ==========\n");

// --- var：函数作用域，可以重复声明，会提升 ---
var greeting = "Hello";
var greeting = "Hi";       // 不报错！var 允许重复声明（这很危险）
console.log("var greeting:", greeting);  // "Hi"

// var 的作用域是函数级别，不受 {} 限制
if (true) {
    var leaked = "我从 if 块里泄漏出来了";
}
console.log("var leaked:", leaked);  // 能访问到！因为 var 不受块作用域限制

// var 的提升 (hoisting)：声明被提到函数顶部，但赋值不会
console.log("var hoisted:", hoisted);  // undefined（不报错，但值是 undefined）
var hoisted = "我被提升了";


// --- let：块作用域，不能重复声明 ---
let score = 100;
score = 200;               // ✔ let 可以重新赋值
// let score = 300;         // ✗ 报错！let 不允许重复声明（取消注释试试）

if (true) {
    let blockScoped = "我只在这个 {} 里存在";
    console.log("let inside block:", blockScoped);
}
// console.log(blockScoped);  // ✗ 报错！let 有块作用域，外面访问不到


// --- const：块作用域，不能重新赋值 ---
const PI = 3.14159;
// PI = 3.14;               // ✗ 报错！const 不能重新赋值（取消注释试试）

// 重要！const 只是不能重新赋值，但如果值是对象/数组，内容可以修改
const user = { name: "Alice" };
user.name = "Bob";           // ✔ 修改对象属性没问题
console.log("const object mutated:", user.name);  // "Bob"

const colors = ["red"];
colors.push("blue");         // ✔ 修改数组内容没问题
console.log("const array mutated:", colors);       // ["red", "blue"]

// user = { name: "Charlie" };  // ✗ 报错！不能把 user 指向一个新对象

console.log("\n最佳实践：默认用 const，需要重新赋值时才用 let，永远不用 var\n");


// ============================================================
// PART 2 — 7 种原始类型 (Primitive Types)
//
// JavaScript 有 7 种原始类型（Primitive）：
//   1. string   — 字符串
//   2. number   — 数字（整数和浮点数都是 number）
//   3. boolean  — 布尔值（true / false）
//   4. null     — 空值（显式表示"没有值"）
//   5. undefined — 未定义（变量声明了但没赋值）
//   6. symbol   — 符号（唯一标识符，ES6 新增）
//   7. bigint   — 大整数（可以表示任意大的整数，ES2020 新增）
//
// 还有 1 种引用类型（Reference Type）：
//   object — 对象、数组、函数、日期、正则……都属于 object
// ============================================================

console.log("========== PART 2: 7 种原始类型 ==========\n");

// 1. string — 字符串（用 ' 或 " 或 ` 包裹）
const name = "Alice";
const greeting2 = 'Hello';
const template = `Hi, ${name}`;     // 模板字符串（04 文件会详细讲）
console.log("string:", name, typeof name);              // "Alice" "string"

// 2. number — 数字
// JavaScript 不区分 int 和 float，统一用 number（64 位浮点数）
const age = 25;
const price = 19.99;
const infinity = Infinity;
const notANumber = NaN;              // Not a Number，但 typeof 仍然是 number！
console.log("number:", age, typeof age);                // 25 "number"
console.log("NaN is number:", typeof notANumber);       // "number"（坑！）

// 3. boolean — 布尔值
const isActive = true;
const isDeleted = false;
console.log("boolean:", isActive, typeof isActive);     // true "boolean"

// 4. null — 显式的"空值"
// 通常用来表示"这个变量故意不指向任何东西"
const emptyValue = null;
console.log("null:", emptyValue, typeof emptyValue);    // null "object"（著名的 bug！）

// 5. undefined — 未定义
// 变量声明了但没赋值，函数没有 return 值时，都是 undefined
let notAssigned;
console.log("undefined:", notAssigned, typeof notAssigned);  // undefined "undefined"

// null vs undefined 的区别：
//   null      → 程序员故意设的"空"  （"我知道这里没有值"）
//   undefined → 系统默认的"未定义"   （"这个值还没被设置"）

// 6. symbol — 唯一标识符（ES6）
// 每个 Symbol 都是唯一的，即使描述相同
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("symbol:", typeof sym1);                    // "symbol"
console.log("sym1 === sym2:", sym1 === sym2);           // false（永远不相等）

// 7. bigint — 大整数（ES2020）
// 普通 number 能精确表示的最大整数是 2^53 - 1
// 超过这个值就要用 BigInt（在数字后面加 n）
const bigNumber = 9007199254740993n;
console.log("bigint:", bigNumber, typeof bigNumber);    // 9007199254740993n "bigint"
// 注意：BigInt 不能和 number 直接运算
// const result = bigNumber + 1;  // ✗ 报错！要用 bigNumber + 1n


// ============================================================
// PART 3 — typeof 运算符
//
// typeof 返回一个字符串，表示操作数的类型。
// 但有几个著名的坑需要注意！
// ============================================================

console.log("\n========== PART 3: typeof 运算符 ==========\n");

console.log('typeof "hello"  →', typeof "hello");       // "string"
console.log("typeof 42       →", typeof 42);            // "number"
console.log("typeof true     →", typeof true);          // "boolean"
console.log("typeof undefined→", typeof undefined);     // "undefined"
console.log("typeof Symbol() →", typeof Symbol());      // "symbol"
console.log("typeof 42n      →", typeof 42n);           // "bigint"

// ⚠️ 坑 1：typeof null === "object"
// 这是 JavaScript 最著名的 bug，从第一版就存在，永远不会被修复
console.log("typeof null     →", typeof null);           // "object"（坑！）

// ⚠️ 坑 2：typeof 对函数返回 "function"，但函数其实也是 object
console.log("typeof function →", typeof function(){}); // "function"

// ⚠️ 坑 3：typeof 数组返回 "object"，不会返回 "array"
console.log("typeof []       →", typeof []);            // "object"
// 检查数组要用 Array.isArray()
console.log("Array.isArray([]):", Array.isArray([]));   // true

// 如何正确判断 null？
const value = null;
console.log("判断 null:", value === null);               // true（用 === null）


// ============================================================
// PART 4 — 原始类型 vs 引用类型
//
// 原始类型按"值"传递，引用类型按"引用"传递。
// 这是新手容易混淆的重点！
// ============================================================

console.log("\n========== PART 4: 值传递 vs 引用传递 ==========\n");

// 原始类型：复制的是值本身
let a = 10;
let b = a;    // b 拿到的是 10 这个值的副本
b = 20;       // 修改 b 不影响 a
console.log("原始类型: a =", a, ", b =", b);  // a = 10, b = 20

// 引用类型：复制的是引用（内存地址）
const obj1 = { x: 1 };
const obj2 = obj1;     // obj2 和 obj1 指向同一个对象
obj2.x = 99;           // 修改 obj2 也会影响 obj1！
console.log("引用类型: obj1.x =", obj1.x, ", obj2.x =", obj2.x);
// obj1.x = 99, obj2.x = 99（它们是同一个对象）

console.log("\n提示：如果想复制对象而不影响原对象，可以用 {...obj} 或 Object.assign()\n");

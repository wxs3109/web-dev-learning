// ============================================================
// 02 — 运算符与类型转换 (Operators & Type Coercion)
//
// 在终端运行: node 02-operators-and-coercion.js
//
// 本文件涵盖：
//   1. 算术运算符 (Arithmetic)
//   2. 比较运算符 (Comparison)
//   3. 逻辑运算符 (Logical)
//   4. 赋值运算符 (Assignment)
//   5. 隐式类型转换 (Implicit Coercion)
//   6. 显式类型转换 (Explicit Conversion)
//   7. Truthy 和 Falsy 值
// ============================================================


// ============================================================
// PART 1 — 算术运算符
//
//   +   加法（也用于字符串拼接！）
//   -   减法
//   *   乘法
//   /   除法（结果可以是小数，不像 C/Java 的整除）
//   %   取余（modulo）
//   **  幂运算（ES2016，等同于 Math.pow()）
// ============================================================

console.log("========== PART 1: 算术运算符 ==========\n");

console.log("10 + 3  =", 10 + 3);    // 13
console.log("10 - 3  =", 10 - 3);    // 7
console.log("10 * 3  =", 10 * 3);    // 30
console.log("10 / 3  =", 10 / 3);    // 3.3333...（不是 3！JS 没有整除）
console.log("10 % 3  =", 10 % 3);    // 1（余数）
console.log("2 ** 10 =", 2 ** 10);   // 1024（2 的 10 次方）

// ⚠️ + 号遇到字符串会变成拼接
console.log('"5" + 3 =', "5" + 3);   // "53"（字符串拼接，不是数学加法！）
console.log("5 + 3   =", 5 + 3);     // 8（数学加法）

// 自增 / 自减
let count = 0;
count++;                               // 等同于 count = count + 1
console.log("count++ →", count);       // 1
count--;
console.log("count-- →", count);       // 0


// ============================================================
// PART 2 — 比较运算符
//
// 两种相等判断：
//   ==   宽松相等（会做类型转换后再比较）—— 尽量避免使用！
//   ===  严格相等（不做类型转换，类型和值都必须相同）—— 推荐使用！
//
//   !=   宽松不等
//   !==  严格不等
//   <, >, <=, >=  大小比较
// ============================================================

console.log("\n========== PART 2: 比较运算符 ==========\n");

// == vs === 是面试常考题！
console.log('5 == "5"  →', 5 == "5");    // true（== 会把 "5" 转成 5 再比）
console.log('5 === "5" →', 5 === "5");   // false（=== 不转换，类型不同直接 false）

console.log("0 == false  →", 0 == false);    // true（坑！0 转换后等于 false）
console.log("0 === false →", 0 === false);   // false（推荐用 ===）

console.log('"" == false  →', "" == false);    // true（空字符串也等于 false）
console.log('"" === false →', "" === false);   // false

console.log("null == undefined  →", null == undefined);   // true（特殊规则）
console.log("null === undefined →", null === undefined);  // false

// 最佳实践：永远用 === 和 !==，避免隐式转换的坑
console.log("\n最佳实践：永远用 === 和 !==\n");

// 大小比较
console.log("10 > 5   →", 10 > 5);      // true
console.log("10 >= 10 →", 10 >= 10);    // true
console.log('"apple" < "banana" →', "apple" < "banana");  // true（按字母顺序比较）


// ============================================================
// PART 3 — 逻辑运算符
//
//   &&  逻辑与（AND）—— 两边都为 true 才返回 true
//   ||  逻辑或（OR）  —— 有一边为 true 就返回 true
//   !   逻辑非（NOT）—— 取反
//
// 重要特性：&& 和 || 返回的不是 true/false，而是操作数本身！
// 这叫"短路求值" (short-circuit evaluation)
// ============================================================

console.log("========== PART 3: 逻辑运算符 ==========\n");

console.log("true && true   →", true && true);     // true
console.log("true && false  →", true && false);    // false
console.log("true || false  →", true || false);    // true
console.log("!true          →", !true);            // false

// 短路求值 —— && 和 || 返回的是操作数，不一定是 boolean
// &&：遇到第一个 falsy 值就返回它，否则返回最后一个值
console.log('"hello" && 42    →', "hello" && 42);      // 42（"hello" 是 truthy，继续看 42）
console.log("0 && 42          →", 0 && 42);            // 0（0 是 falsy，直接返回 0）

// ||：遇到第一个 truthy 值就返回它，否则返回最后一个值
console.log('"" || "default"  →', "" || "default");    // "default"（"" 是 falsy）
console.log('"hello" || "bye" →', "hello" || "bye");   // "hello"（已经 truthy，不看后面）

// 实际用途：|| 常用来设默认值（但有坑，04 文件会讲 ?? 更好的方案）
const username = "" || "Guest";
console.log("默认值 (||):", username);   // "Guest"（但如果用户名就是空字符串呢？）


// ============================================================
// PART 4 — 赋值运算符
//
// 简写形式，减少重复代码
// ============================================================

console.log("\n========== PART 4: 赋值运算符 ==========\n");

let x = 10;
x += 5;     // x = x + 5  → 15
console.log("x += 5 →", x);
x -= 3;     // x = x - 3  → 12
console.log("x -= 3 →", x);
x *= 2;     // x = x * 2  → 24
console.log("x *= 2 →", x);
x /= 4;     // x = x / 4  → 6
console.log("x /= 4 →", x);
x %= 4;     // x = x % 4  → 2
console.log("x %= 4 →", x);
x **= 3;    // x = x ** 3 → 8
console.log("x **= 3 →", x);

// 逻辑赋值运算符（ES2021）
let a = null;
a ??= "default";   // 如果 a 是 null/undefined，才赋值
console.log("a ??= 'default' →", a);   // "default"

let b = 0;
b ||= 42;          // 如果 b 是 falsy，才赋值
console.log("b ||= 42 →", b);          // 42（0 是 falsy）

let c = 1;
c &&= 99;          // 如果 c 是 truthy，才赋值
console.log("c &&= 99 →", c);          // 99


// ============================================================
// PART 5 — 隐式类型转换 (Implicit Coercion)
//
// JavaScript 会在运算时自动转换类型，这经常导致意外结果。
// 这也是 JavaScript 被吐槽最多的特性之一。
// ============================================================

console.log("\n========== PART 5: 隐式类型转换 ==========\n");

// 字符串拼接 vs 数学运算
console.log('"3" + 2   →', "3" + 2);      // "32"（+ 遇字符串变拼接）
console.log('"3" - 2   →', "3" - 2);      // 1  （- 只能做数学运算，会转换 "3" → 3）
console.log('"3" * 2   →', "3" * 2);      // 6
console.log('"3" / 2   →', "3" / 2);      // 1.5

// 更多奇怪的转换
console.log("true + 1    →", true + 1);      // 2（true 转成 1）
console.log("false + 1   →", false + 1);     // 1（false 转成 0）
console.log('"" + 0      →', "" + 0);        // "0"（拼接）
console.log("null + 1    →", null + 1);      // 1（null 转成 0）
console.log("undefined+1 →", undefined + 1); // NaN（undefined 转不了数字）

// 经典面试题
console.log("[] + []     →", [] + []);       // ""（两个空数组转成空字符串再拼接）
console.log("[] + {}     →", [] + {});       // "[object Object]"
console.log("{} + []     →", {} + []);       // "[object Object]"（在 console 中可能结果不同）


// ============================================================
// PART 6 — 显式类型转换 (Explicit Conversion)
//
// 手动转换类型，比隐式转换更安全、更可读。
// ============================================================

console.log("\n========== PART 6: 显式类型转换 ==========\n");

// 转成 Number
console.log('Number("123")   →', Number("123"));      // 123
console.log('Number("")      →', Number(""));          // 0
console.log('Number("abc")   →', Number("abc"));      // NaN
console.log('Number(true)    →', Number(true));        // 1
console.log('Number(false)   →', Number(false));       // 0
console.log('Number(null)    →', Number(null));        // 0
console.log('Number(undefined)→', Number(undefined));  // NaN
console.log('parseInt("42px") →', parseInt("42px"));   // 42（解析到第一个非数字字符）
console.log('parseFloat("3.14abc")→', parseFloat("3.14abc")); // 3.14
console.log('+"99"           →', +"99");               // 99（一元 + 号也可以转数字）

// 转成 String
console.log('String(123)     →', String(123));         // "123"
console.log('String(true)    →', String(true));        // "true"
console.log('String(null)    →', String(null));        // "null"
console.log('(123).toString()→', (123).toString());    // "123"

// 转成 Boolean
console.log('Boolean(0)      →', Boolean(0));          // false
console.log('Boolean("")     →', Boolean(""));         // false
console.log('Boolean("hello")→', Boolean("hello"));    // true
console.log('Boolean([])     →', Boolean([]));         // true（坑！空数组是 truthy）
console.log('Boolean({})     →', Boolean({}));         // true（坑！空对象也是 truthy）
console.log('!!42            →', !!42);                // true（双重取反，快捷转 boolean）


// ============================================================
// PART 7 — Truthy 和 Falsy 值
//
// JavaScript 中，任何值都可以当作 boolean 使用（比如在 if 条件中）。
//
// Falsy 值（只有这 8 个，相当于 false）：
//   false, 0, -0, 0n, "", null, undefined, NaN
//
// Truthy 值（除了上面 8 个以外的所有值，相当于 true）：
//   包括 "0"（非空字符串）、[]（空数组）、{}（空对象）等
// ============================================================

console.log("\n========== PART 7: Truthy 和 Falsy ==========\n");

const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

console.log("所有 Falsy 值：");
falsyValues.forEach((val, i) => {
    console.log(`  ${i + 1}. ${String(val).padEnd(12)} → Boolean: ${Boolean(val)}`);
});

console.log("\n容易混淆的 Truthy 值：");
console.log('  "0"   → Boolean:', Boolean("0"));      // true！（非空字符串）
console.log('  "false" → Boolean:', Boolean("false")); // true！（非空字符串）
console.log("  []    → Boolean:", Boolean([]));         // true！（空数组）
console.log("  {}    → Boolean:", Boolean({}));         // true！（空对象）

console.log("\n记住：只有那 8 个 falsy 值是 false，其他全是 true\n");

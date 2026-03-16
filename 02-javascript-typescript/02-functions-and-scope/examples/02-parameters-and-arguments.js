// ============================================================
// 02 — 参数与实参 (Parameters and Arguments)
//
// 在终端运行: node 02-parameters-and-arguments.js
//
// 本文件涵盖：
//   1. 形参 vs 实参 (Parameter vs Argument)
//   2. 默认参数 (Default Parameters)
//   3. 剩余参数 (Rest Parameters)
//   4. 展开语法 (Spread Syntax)
//   5. 解构参数 (Destructuring Parameters)
//   6. arguments 对象（传统方式）
//
// 核心思想：
//   JavaScript 函数的参数传递非常灵活——
//   你可以少传、多传、设默认值、收集剩余、展开数组、解构对象。
//   掌握这些技巧能写出更简洁、更灵活的函数。
// ============================================================


// ============================================================
// PART 1 — 形参 vs 实参 (Parameter vs Argument)
//
// - 形参 (parameter)：定义函数时写的变量名（占位符）
// - 实参 (argument)：调用函数时传入的具体值
//
// JavaScript 不强制参数个数匹配：
//   - 少传 → 缺少的形参值为 undefined
//   - 多传 → 多余的实参被忽略（但可通过 arguments 访问）
// ============================================================

console.log("========== PART 1: 形参 vs 实参 ==========\n");

function introduce(name, age) {   // name, age 是形参
  console.log(`我是 ${name}，今年 ${age} 岁`);
}
introduce("Alice", 25);           // "Alice", 25 是实参
introduce("Bob");                 // age → undefined
introduce("Carol", 30, "extra");  // "extra" 被忽略

// 少传参数时，可以手动判断并处理
function safeDivide(a, b) {
  if (b === undefined) {
    console.log("safeDivide: 缺少除数，返回 NaN");
    return NaN;
  }
  return a / b;
}
console.log("safeDivide(10, 2) =", safeDivide(10, 2)); // 5
console.log("safeDivide(10)   =", safeDivide(10));      // NaN


// ============================================================
// PART 2 — 默认参数 (Default Parameters, ES6)
//
// 语法：function fn(param = defaultValue) { ... }
//
// 规则：
//   - 当实参为 undefined 时（包括没传），使用默认值
//   - null 不会触发默认值！null !== undefined
//   - 默认值可以是任何表达式（甚至调用另一个函数）
//   - 默认值按从左到右的顺序求值，后面的参数可以引用前面的
// ============================================================

console.log("\n========== PART 2: 默认参数 ==========\n");

function createUser(name = "Anonymous", role = "student") {
  return { name, role };
}

console.log("无参数:", createUser());
// { name: 'Anonymous', role: 'student' }

console.log("只传 name:", createUser("Ava"));
// { name: 'Ava', role: 'student' }

console.log("传两个:", createUser("Ava", "mentor"));
// { name: 'Ava', role: 'mentor' }

// ⚠️ undefined 触发默认值，null 不触发
console.log("传 undefined:", createUser(undefined, "admin"));
// { name: 'Anonymous', role: 'admin' }

console.log("传 null:", createUser(null, "admin"));
// { name: null, role: 'admin' }  ← null 不触发默认值！

// 默认值可以是表达式，也可以引用前面的参数
function createId(prefix = "user", id = Math.random().toString(36).slice(2, 8)) {
  return `${prefix}_${id}`;
}
console.log("动态默认值:", createId());
console.log("指定前缀:", createId("admin"));
console.log("完全指定:", createId("admin", "001"));

// 后面参数引用前面参数
function createRect(width, height = width) {
  return { width, height, area: width * height };
}
console.log("正方形:", createRect(5));      // { width: 5, height: 5, area: 25 }
console.log("长方形:", createRect(5, 10));   // { width: 5, height: 10, area: 50 }


// ============================================================
// PART 3 — 剩余参数 (Rest Parameters, ES6)
//
// 语法：function fn(a, b, ...rest) { ... }
//
// 特点：
//   - ...rest 把"剩余的"实参收集成一个真正的数组
//   - rest 参数必须放在最后（只能有一个）
//   - 取代了旧的 arguments 对象（更清晰、更灵活）
// ============================================================

console.log("\n========== PART 3: 剩余参数 ==========\n");

// 基本用法：收集所有参数
function multiply(...numbers) {
  return numbers.reduce((product, n) => product * n, 1);
}
console.log("multiply(2, 3) =", multiply(2, 3));           // 6
console.log("multiply(2, 3, 4) =", multiply(2, 3, 4));     // 24
console.log("multiply() =", multiply());                     // 1 (空数组的积定义为 1)

// 与普通参数搭配使用：前面的参数先匹配，剩余的归 rest
function logWithLevel(level, ...messages) {
  console.log(`[${level}]`, ...messages);
}
logWithLevel("INFO", "服务器启动", "端口 3000");
// [INFO] 服务器启动 端口 3000

logWithLevel("ERROR", "连接失败");
// [ERROR] 连接失败

// rest 参数是真正的数组（不像 arguments 是类数组）
function showTypeAndMethods(...args) {
  console.log("是数组吗?", Array.isArray(args));            // true
  console.log("可以用 map:", args.map((x) => x * 2));       // [2, 4, 6]
}
showTypeAndMethods(1, 2, 3);


// ============================================================
// PART 4 — 展开语法 (Spread Syntax, ES6)
//
// 语法：fn(...array) 或 [...arr1, ...arr2]
//
// 展开 vs 剩余：
//   - 剩余 (rest)：在函数定义中，收集多个参数 → 变成数组
//   - 展开 (spread)：在函数调用中，把数组 → 展开成多个参数
//
// 用途：
//   1. 将数组展开为函数参数
//   2. 合并/复制数组
//   3. 合并/复制对象
// ============================================================

console.log("\n========== PART 4: 展开语法 ==========\n");

// 1. 将数组展开为函数参数
const scores = [88, 92, 79, 95, 100];
console.log("Math.max(...scores) =", Math.max(...scores));  // 100
console.log("Math.min(...scores) =", Math.min(...scores));  // 79

// 等价于 Math.max(88, 92, 79, 95, 100)
// 在 ES5 中需要用 Math.max.apply(null, scores)

// 2. 合并数组
const frontend = ["HTML", "CSS"];
const scripting = ["JavaScript"];
const backend = ["Node.js"];
const allSkills = [...frontend, ...scripting, ...backend];
console.log("合并数组:", allSkills);
// ['HTML', 'CSS', 'JavaScript', 'Node.js']

// 3. 复制数组（浅拷贝）
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("原数组:", original);  // [1, 2, 3]  ← 不受影响
console.log("复制后:", copy);      // [1, 2, 3, 4]

// 4. 展开对象（浅拷贝 + 合并）
const baseConfig = { theme: "dark", lang: "zh" };
const userConfig = { lang: "en", fontSize: 14 };
const merged = { ...baseConfig, ...userConfig };
console.log("合并对象:", merged);
// { theme: 'dark', lang: 'en', fontSize: 14 }
// 后面的 lang: 'en' 覆盖了前面的 lang: 'zh'


// ============================================================
// PART 5 — 解构参数 (Destructuring Parameters)
//
// 当函数接收一个对象时，可以直接在参数位置解构。
// 好处：
//   - 调用时参数顺序无关（用对象的键名匹配）
//   - 可以搭配默认值
//   - 代码可读性好（一眼看出函数需要哪些字段）
// ============================================================

console.log("\n========== PART 5: 解构参数 ==========\n");

// 对象解构参数
function createProfile({ name, age, role = "viewer" }) {
  return `${name} (${age}) - ${role}`;
}

console.log(createProfile({ name: "Alice", age: 25 }));
// "Alice (25) - viewer"

console.log(createProfile({ age: 30, name: "Bob", role: "admin" }));
// "Bob (30) - admin"  ← 顺序无关！

// 搭配默认值：整个参数对象也可以有默认值
function initApp({ debug = false, port = 3000, host = "localhost" } = {}) {
  console.log(`启动: ${host}:${port}, debug=${debug}`);
}
initApp();                       // 使用全部默认值
initApp({ port: 8080 });         // 只覆盖 port
initApp({ debug: true, port: 5000 }); // 覆盖多个

// 数组解构参数
function getFirstAndRest([first, ...rest]) {
  console.log("第一个:", first);
  console.log("剩余的:", rest);
}
getFirstAndRest([10, 20, 30, 40]);
// 第一个: 10
// 剩余的: [20, 30, 40]


// ============================================================
// PART 6 — arguments 对象（传统方式，了解即可）
//
// - 每个普通函数（非箭头函数）内部都有一个 arguments 对象
// - 它是"类数组"(array-like)：有 length 和索引，但不是真正的数组
// - 不能直接用 map/filter 等数组方法，需要先转换
// - 在现代代码中，用 rest 参数 (...args) 代替
// ============================================================

console.log("\n========== PART 6: arguments 对象 ==========\n");

function legacySum() {
  console.log("arguments:", arguments);
  console.log("arguments.length:", arguments.length);
  console.log("是数组吗?", Array.isArray(arguments)); // false

  // 转成真正的数组再操作
  const arr = Array.from(arguments); // 或 [...arguments]
  return arr.reduce((sum, n) => sum + n, 0);
}
console.log("legacySum(1,2,3) =", legacySum(1, 2, 3)); // 6

// ⚠️ 箭头函数没有自己的 arguments
const arrowFn = () => {
  // console.log(arguments);  // ✗ 在顶层会报错或引用外层的 arguments
};

// 对比总结
console.log("\n对比总结：");
console.log("  arguments → 类数组，不推荐，兼容旧代码用");
console.log("  ...rest   → 真正的数组，推荐使用");


console.log("\n最佳实践总结：");
console.log("  - 参数多于 2-3 个时 → 用对象 + 解构（顺序无关、更可读）");
console.log("  - 需要收集可变数量的参数 → 用 rest 参数 (...args)");
console.log("  - 把数组展开为参数 → 用 spread 语法 (...arr)");
console.log("  - 给参数设默认值 → 用默认参数语法（= defaultValue）");
console.log("  - 避免使用 arguments 对象 → 用 rest 参数代替\n");


// give me an example using function as parameters and arguments

console.log("\n========== PART 7: 函数作为参数 ==========\n");

// 函数作为参数（回调函数）
function greet(name, formatter) {
  const message = formatter(name);
  console.log(message);
}

// 定义一个格式化函数
function fancyFormatter(name) {
  return `✨✨ ${name.toUpperCase()} ✨✨`;
}

// 调用 greet，传入 fancyFormatter 作为回调
greet("Alice", fancyFormatter);
// 输出: ✨✨ ALICE ✨✨
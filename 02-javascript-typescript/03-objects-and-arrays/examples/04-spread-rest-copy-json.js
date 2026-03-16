// ============================================================
// 04 — 展开/剩余运算符、浅拷贝与深拷贝、JSON
//      (Spread/Rest, Shallow vs Deep Copy, JSON)
//
// 在终端运行: node 04-spread-rest-copy-json.js
//
// 本文件涵盖：
//   1. 展开运算符 — 数组 (Spread with Arrays)
//   2. 展开运算符 — 对象 (Spread with Objects)
//   3. 剩余运算符 (Rest Operator)
//   4. 浅拷贝 vs 深拷贝 (Shallow vs Deep Copy)
//   5. JSON.stringify / JSON.parse
//
// 核心思想：
//   ... 这三个点在 JavaScript 中有两种含义：
//   - 展开 (spread)：把数组/对象"展开"成独立元素
//   - 剩余 (rest)：把多个元素"收集"成数组/对象
//   看上下文判断是哪种。
// ============================================================


// ============================================================
// PART 1 — 展开运算符 — 数组 (Spread with Arrays)
//
// ...array 会把数组展开成一个个独立的元素
// ============================================================

console.log("========== PART 1: 展开运算符 — 数组 ==========\n");

// 合并数组
const front = [1, 2, 3];
const back = [4, 5, 6];
const merged = [...front, ...back];
console.log("合并数组:", merged); // [1, 2, 3, 4, 5, 6]

// 在任意位置插入元素
const withMiddle = [...front, 99, ...back];
console.log("中间插入:", withMiddle); // [1, 2, 3, 99, 4, 5, 6]

// 复制数组（浅拷贝）
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("\n原数组:", original); // [1, 2, 3]（不受影响）
console.log("副本:", copy); // [1, 2, 3, 4]

// 字符串展开为字符数组
const chars = [..."Hello"];
console.log("\n字符串展开:", chars); // ["H", "e", "l", "l", "o"]

// 配合 Math 函数
const nums = [3, 1, 4, 1, 5, 9];
console.log("\n最大值:", Math.max(...nums)); // 9
console.log("最小值:", Math.min(...nums)); // 1

// 去重
const dupes = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(dupes)];
console.log("去重:", unique); // [1, 2, 3]


// ============================================================
// PART 2 — 展开运算符 — 对象 (Spread with Objects)
//
// ...object 会把对象的所有属性展开
// 后面的属性会覆盖前面的（同名时）
// ============================================================

console.log("\n\n========== PART 2: 展开运算符 — 对象 ==========\n");

// 合并对象
const defaults = { theme: "light", lang: "en", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };

const settings = { ...defaults, ...userPrefs };
console.log("合并配置:", settings);
// { theme: "dark", lang: "en", fontSize: 16 }
// userPrefs 的值覆盖了 defaults

// 添加/修改属性（不修改原对象）
const user = { name: "Wenbo", age: 25 };
const updatedUser = { ...user, age: 26, city: "Beijing" };
console.log("\n原对象:", user); // 不变
console.log("新对象:", updatedUser); // age 被更新，city 被添加

// 删除属性（用解构 + 剩余）
const { age, ...userWithoutAge } = user;
console.log("\n删除 age:", userWithoutAge); // { name: "Wenbo" }


// ============================================================
// PART 3 — 剩余运算符 (Rest Operator)
//
// 和展开长得一样（都是 ...），但作用相反：
// - 展开：拆开 → 用在赋值的右边或函数调用中
// - 剩余：收集 → 用在赋值的左边或函数参数中
// ============================================================

console.log("\n\n========== PART 3: 剩余运算符 ==========\n");

// 函数参数中的 rest — 收集所有参数
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("sum(1,2,3):", sum(1, 2, 3));
console.log("sum(1,2,3,4,5):", sum(1, 2, 3, 4, 5));

// 第一个参数单独取，剩余的收集
function log(level, ...messages) {
  console.log(`[${level}]`, ...messages);
}
log("INFO", "服务器启动", "端口 3000");
log("ERROR", "连接失败");

// 对象解构中的 rest
const response = {
  status: 200,
  message: "OK",
  data: [1, 2, 3],
  timestamp: "2024-01-01",
};

const { status, message, ...payload } = response;
console.log("\nstatus:", status);
console.log("message:", message);
console.log("剩余属性:", payload); // { data: [1,2,3], timestamp: "2024-01-01" }

// 数组解构中的 rest
const [first, second, ...remaining] = [10, 20, 30, 40, 50];
console.log("\nfirst:", first);
console.log("second:", second);
console.log("remaining:", remaining); // [30, 40, 50]


// ============================================================
// PART 4 — 浅拷贝 vs 深拷贝 (Shallow vs Deep Copy)
//
// 引用类型的变量存的是"地址"，不是"值"。
// 浅拷贝：只复制一层，嵌套对象仍然共享引用。
// 深拷贝：完全独立的副本，嵌套对象也会被复制。
// ============================================================

console.log("\n\n========== PART 4: 浅拷贝 vs 深拷贝 ==========\n");

// --- 引用的问题 ---
const obj1 = { name: "Wenbo", scores: [90, 85, 92] };
const obj2 = obj1; // 不是拷贝！只是指向同一个对象
obj2.name = "Changed";
console.log("obj1.name:", obj1.name); // "Changed"（被影响了！）
console.log("obj1 === obj2:", obj1 === obj2); // true，同一个对象

// --- 浅拷贝 ---
console.log("\n--- 浅拷贝 ---");

const original2 = { name: "Wenbo", scores: [90, 85, 92] };

// 方式1: 展开运算符
const shallow1 = { ...original2 };

// 方式2: Object.assign
const shallow2 = Object.assign({}, original2);

// 第一层是独立的
shallow1.name = "Shallow";
console.log("original2.name:", original2.name); // "Wenbo"（不受影响）

// 但嵌套对象仍然共享！
shallow1.scores.push(100);
console.log("original2.scores:", original2.scores); // [90, 85, 92, 100]（被影响了！）
console.log("shallow1.scores:", shallow1.scores); // [90, 85, 92, 100]

// --- 深拷贝 ---
console.log("\n--- 深拷贝 ---");

const original3 = { name: "Wenbo", scores: [90, 85, 92], info: { city: "Beijing" } };

// 方式1: structuredClone()（推荐，现代浏览器和 Node 17+ 支持）
const deep1 = structuredClone(original3);
deep1.scores.push(100);
deep1.info.city = "Shanghai";
console.log("original3.scores:", original3.scores); // [90, 85, 92]（不受影响）
console.log("original3.info.city:", original3.info.city); // "Beijing"（不受影响）
console.log("deep1.scores:", deep1.scores); // [90, 85, 92, 100]

// 方式2: JSON.parse(JSON.stringify())
// 简单粗暴，但有局限性（不能处理 function、undefined、Date、RegExp 等）
const deep2 = JSON.parse(JSON.stringify(original3));
deep2.scores.push(200);
console.log("\noriginal3.scores:", original3.scores); // [90, 85, 92]（不受影响）
console.log("deep2.scores:", deep2.scores); // [90, 85, 92, 200]

// JSON 方法的坑
const problematic = {
  fn: function () {},    // 函数会丢失
  undef: undefined,      // undefined 会丢失
  date: new Date(),      // Date 会变成字符串
  regex: /abc/,          // RegExp 会变成空对象
};
console.log("\nJSON 深拷贝的坑:");
console.log("原对象:", problematic);
console.log("JSON 拷贝:", JSON.parse(JSON.stringify(problematic)));


// ============================================================
// PART 5 — JSON (JavaScript Object Notation)
//
// JSON 是最常用的数据交换格式。
// JSON.stringify() — 对象 → JSON 字符串
// JSON.parse()     — JSON 字符串 → 对象
// ============================================================

console.log("\n\n========== PART 5: JSON ==========\n");

// --- JSON.stringify ---
const data = {
  name: "Wenbo",
  age: 25,
  hobbies: ["coding", "reading"],
  isStudent: false,
};

const jsonStr = JSON.stringify(data);
console.log("JSON 字符串:", jsonStr);
console.log("类型:", typeof jsonStr); // "string"

// 格式化输出（第三个参数是缩进空格数）
const pretty = JSON.stringify(data, null, 2);
console.log("\n格式化 JSON:");
console.log(pretty);

// 选择性序列化（第二个参数是 replacer）
const partial = JSON.stringify(data, ["name", "age"]);
console.log("\n只保留 name 和 age:", partial);

// 自定义 replacer 函数
const filtered = JSON.stringify(data, (key, value) => {
  if (typeof value === "number") return undefined; // 去掉数字类型
  return value;
});
console.log("去掉数字:", filtered);

// --- JSON.parse ---
console.log("\n--- JSON.parse ---");

const parsed = JSON.parse(jsonStr);
console.log("解析后:", parsed);
console.log("类型:", typeof parsed); // "object"
console.log("parsed.name:", parsed.name);

// parse 失败会抛错
try {
  JSON.parse("这不是 JSON");
} catch (e) {
  console.log("\nJSON.parse 错误:", e.message);
}

// reviver 函数 — 在解析时转换值
const jsonWithDate = '{"name":"Event","date":"2024-01-15T10:30:00.000Z"}';
const withDate = JSON.parse(jsonWithDate, (key, value) => {
  if (key === "date") return new Date(value);
  return value;
});
console.log("\n带日期解析:", withDate);
console.log("date 类型:", withDate.date instanceof Date); // true

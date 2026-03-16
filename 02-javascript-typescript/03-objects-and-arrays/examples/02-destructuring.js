// ============================================================
// 02 — 解构赋值 (Destructuring Assignment)
//
// 在终端运行: node 02-destructuring.js
//
// 本文件涵盖：
//   1. 对象解构 (Object Destructuring)
//   2. 数组解构 (Array Destructuring)
//   3. 默认值 (Default Values)
//   4. 重命名 (Renaming)
//   5. 嵌套解构 (Nested Destructuring)
//   6. 函数参数解构 (Parameter Destructuring)
//   7. 实用技巧
//
// 核心思想：
//   解构是一种从对象或数组中快速提取值的语法糖。
//   它让代码更简洁、更易读，是现代 JS 中最常用的特性之一。
// ============================================================


// ============================================================
// PART 1 — 对象解构 (Object Destructuring)
//
// 从对象中提取属性，赋值给同名变量。
// 语法：const { prop1, prop2 } = object;
// ============================================================

console.log("========== PART 1: 对象解构 ==========\n");

const user = {
  name: "Wenbo",
  age: 25,
  city: "Beijing",
  role: "developer",
};

// 传统写法
const name1 = user.name;
const age1 = user.age;
console.log("传统写法:", name1, age1);

// 解构写法 — 简洁得多
const { name, age, city, role } = user;
console.log("解构写法:", name, age, city, role);

// 只取需要的属性
const { city: myCity, role: myRole } = user;
console.log("只取部分:", myCity, myRole);


// ============================================================
// PART 2 — 重命名与默认值
//
// 重命名：{ 原名: 新名 }
// 默认值：{ 属性名 = 默认值 }
// 两者可以组合：{ 原名: 新名 = 默认值 }
// ============================================================

console.log("\n\n========== PART 2: 重命名与默认值 ==========\n");

const config = {
  host: "localhost",
  port: 3000,
  // 注意：没有 protocol 和 timeout
};

// 重命名
const { host: serverHost, port: serverPort } = config;
console.log("重命名 — serverHost:", serverHost);
console.log("重命名 — serverPort:", serverPort);

// 默认值：属性不存在或为 undefined 时使用默认值
const { protocol = "https", timeout = 5000 } = config;
console.log("默认值 — protocol:", protocol);
console.log("默认值 — timeout:", timeout);

// 重命名 + 默认值
const { protocol: proto = "http", debug: isDebug = false } = config;
console.log("重命名+默认值 — proto:", proto);
console.log("重命名+默认值 — isDebug:", isDebug);


// ============================================================
// PART 3 — 数组解构 (Array Destructuring)
//
// 按位置提取元素。
// 语法：const [a, b, c] = array;
// ============================================================

console.log("\n\n========== PART 3: 数组解构 ==========\n");

const colors = ["red", "green", "blue", "yellow", "purple"];

// 基础解构
const [first, second, third] = colors;
console.log("前三个:", first, second, third);

// 跳过元素 — 用逗号占位
const [, , thirdColor] = colors;
console.log("跳过前两个，取第三个:", thirdColor);

// 剩余元素 — 用 ...rest 收集
const [primary, ...rest] = colors;
console.log("第一个:", primary);
console.log("剩余:", rest); // ["green", "blue", "yellow", "purple"]

// 交换变量 — 不需要临时变量！
let a = 1;
let b = 2;
console.log("\n交换前: a =", a, ", b =", b);
[a, b] = [b, a];
console.log("交换后: a =", a, ", b =", b);

// 默认值
const [x = 10, y = 20, z = 30] = [100, 200];
console.log("\n数组默认值: x =", x, ", y =", y, ", z =", z);
// x=100, y=200, z=30（只有 z 用了默认值）


// ============================================================
// PART 4 — 嵌套解构 (Nested Destructuring)
//
// 可以一层层地深入解构，提取嵌套的值。
// ============================================================

console.log("\n\n========== PART 4: 嵌套解构 ==========\n");

const student = {
  name: "Alice",
  scores: {
    math: 95,
    english: 88,
    science: 92,
  },
  friends: ["Bob", "Charlie", "Diana"],
};

// 嵌套对象解构
const {
  name: studentName,
  scores: { math, english },
} = student;
console.log("学生:", studentName);
console.log("数学:", math, "英语:", english);

// 嵌套数组 + 对象混合解构
const {
  friends: [bestFriend, ...otherFriends],
} = student;
console.log("最好的朋友:", bestFriend);
console.log("其他朋友:", otherFriends);

// 复杂嵌套
const response = {
  status: 200,
  data: {
    users: [
      { id: 1, name: "Wenbo" },
      { id: 2, name: "Alice" },
    ],
  },
};

const {
  data: {
    users: [firstUser],
  },
} = response;
console.log("\nAPI 第一个用户:", firstUser);


// ============================================================
// PART 5 — 函数参数解构 (Parameter Destructuring)
//
// 可以直接在函数参数中使用解构，让函数调用更清晰。
// ============================================================

console.log("\n\n========== PART 5: 函数参数解构 ==========\n");

// 对象参数解构 — 不用记参数顺序
function createUser({ name, age, role = "user" }) {
  return `${name} (${age}) - ${role}`;
}

console.log(createUser({ name: "Wenbo", age: 25 }));
console.log(createUser({ name: "Alice", age: 30, role: "admin" }));

// 数组参数解构
function getFirst([first, ...rest]) {
  console.log("第一个:", first);
  console.log("剩余:", rest);
}

getFirst([10, 20, 30, 40]);

// 带默认参数对象 — 防止不传参数时报错
function connect({ host = "localhost", port = 3000, ssl = false } = {}) {
  console.log(`\n连接到 ${ssl ? "https" : "http"}://${host}:${port}`);
}

connect({ host: "example.com", ssl: true });
connect({ port: 8080 });
connect(); // 全部使用默认值，不报错


// ============================================================
// PART 6 — 实用技巧
// ============================================================

console.log("\n\n========== PART 6: 实用技巧 ==========\n");

// 1. 从函数返回多个值
function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

const { min, max } = getMinMax([3, 7, 1, 9, 4]);
console.log("min:", min, "max:", max);

// 2. 从模块导入时解构（概念演示）
// const { useState, useEffect } = require('react');

// 3. 解构 + for...of 遍历
const people = [
  { name: "Wenbo", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 28 },
];

console.log("\n解构 + for...of:");
for (const { name: n, age: a } of people) {
  console.log(`  ${n} is ${a} years old`);
}

// 4. 提取 JSON 数据中的字段
const apiResponse = {
  code: 0,
  message: "success",
  data: {
    total: 100,
    list: [1, 2, 3],
  },
};

const {
  code,
  data: { total, list },
} = apiResponse;
console.log("\nAPI 响应: code =", code, ", total =", total, ", list =", list);

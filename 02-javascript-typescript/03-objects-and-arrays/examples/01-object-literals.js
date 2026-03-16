// ============================================================
// 01 — 对象字面量与计算属性 (Object Literals & Computed Properties)
//
// 在终端运行: node 01-object-literals.js
//
// 本文件涵盖：
//   1. 对象字面量基础 (Object Literal Basics)
//   2. 属性简写 (Property Shorthand)
//   3. 方法简写 (Method Shorthand)
//   4. 计算属性名 (Computed Property Names)
//   5. 属性的访问、添加、修改、删除
//   6. 属性遍历 (Enumerating Properties)
//   7. 可选链与空值合并 (Optional Chaining & Nullish Coalescing)
//
// 核心思想：
//   对象是 JavaScript 中最基本的数据结构，几乎所有东西都是对象。
//   掌握对象的创建和操作是写好 JS 的基础。
// ============================================================


// ============================================================
// PART 1 — 对象字面量基础 (Object Literal Basics)
//
// 用 {} 直接创建对象，最常用的方式。
// 属性是 key-value 对，key 是字符串（或 Symbol），value 可以是任意类型。
// ============================================================

console.log("========== PART 1: 对象字面量基础 ==========\n");

const person = {
  name: "Wenbo",
  age: 25,
  isStudent: false,
  hobbies: ["coding", "reading"],
  address: {
    city: "Beijing",
    country: "China",
  },
};

console.log("person 对象:", person);
console.log("类型:", typeof person); // "object"

// 访问属性的两种方式
console.log("\n--- 访问属性 ---");
console.log("点号访问 person.name:", person.name);
console.log('方括号访问 person["age"]:', person["age"]);

// 方括号的优势：可以用变量作为 key
const key = "hobbies";
console.log(`动态 key person[${key}]:`, person[key]);

// 访问嵌套属性
console.log("嵌套属性 person.address.city:", person.address.city);


// ============================================================
// PART 2 — 属性简写与方法简写 (Shorthand)
//
// ES6 提供了更简洁的语法：
//   - 属性简写：变量名和属性名相同时可以省略
//   - 方法简写：省略 function 关键字
// ============================================================

console.log("\n\n========== PART 2: 属性简写与方法简写 ==========\n");

const firstName = "Wenbo";
const lastName = "Sun";
const age = 25;

// 传统写法
const userOld = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// ES6 简写 — 更简洁
const userNew = {
  firstName, // 属性简写：等价于 firstName: firstName
  lastName, // 属性简写
  age, // 属性简写
  getFullName() {
    // 方法简写：省略 : function
    return this.firstName + " " + this.lastName;
  },
};

console.log("传统写法:", userOld);
console.log("ES6 简写:", userNew);
console.log("getFullName():", userNew.getFullName());


// ============================================================
// PART 3 — 计算属性名 (Computed Property Names)
//
// 用 [] 包裹表达式作为属性名，在创建对象时动态确定 key。
// ============================================================

console.log("\n\n========== PART 3: 计算属性名 ==========\n");

const prop = "score";

const student = {
  name: "Alice",
  [prop]: 95, // 等价于 score: 95
  [`${prop}Level`]: "A", // 等价于 scoreLevel: "A"
};

console.log("student:", student);
console.log("student.score:", student.score);
console.log("student.scoreLevel:", student.scoreLevel);

// 实际用途：动态生成对象
function createPair(key, value) {
  return { [key]: value };
}

console.log('\ncreatePair("color", "red"):', createPair("color", "red"));
console.log('createPair("size", 42):', createPair("size", 42));


// ============================================================
// PART 4 — 属性的添加、修改、删除
// ============================================================

console.log("\n\n========== PART 4: 属性的添加、修改、删除 ==========\n");

const car = {
  brand: "Toyota",
  year: 2020,
};

console.log("原始对象:", car);

// 添加属性
car.color = "red";
car["engine"] = "V6";
console.log("添加属性后:", car);

car["model"] = "Camry"; // 也可以用方括号添加
console.log("添加 model 后:", car);

// 修改属性
car.year = 2024;
console.log("修改 year 后:", car);

// 删除属性
delete car.engine;
console.log("删除 engine 后:", car);

// 检查属性是否存在
console.log('\n"color" in car:', "color" in car); // true
console.log('"engine" in car:', "engine" in car); // false
console.log("car.hasOwnProperty('brand'):", car.hasOwnProperty("brand")); // true


// ============================================================
// PART 5 — 属性遍历 (Enumerating Properties)
// ============================================================

console.log("\n\n========== PART 5: 属性遍历 ==========\n");

const product = {
  name: "Laptop",
  price: 999,
  category: "Electronics",
  inStock: true,
};

// Object.keys() — 获取所有 key
console.log("Object.keys():", Object.keys(product));

// Object.values() — 获取所有 value
console.log("Object.values():", Object.values(product));

// Object.entries() — 获取所有 [key, value] 对
console.log("Object.entries():", Object.entries(product));

// for...in 遍历
console.log("\nfor...in 遍历:");
for (const key in product) {
  console.log(`  ${key}: ${product[key]}`);
}

// 用 Object.entries() + 解构遍历（推荐）
console.log("\nObject.entries() + 解构:");
for (const [key, value] of Object.entries(product)) {
  console.log(`  ${key}: ${value}`);
}


// ============================================================
// PART 6 — 可选链与空值合并 (Optional Chaining & Nullish Coalescing)
//
// ?.  可选链：安全访问可能为 null/undefined 的嵌套属性
// ??  空值合并：当值为 null/undefined 时提供默认值
//     区别于 ||：|| 会在 0、""、false 时也触发默认值
// ============================================================

console.log("\n\n========== PART 6: 可选链与空值合并 ==========\n");

const user = {
  name: "Wenbo",
  address: {
    city: "Beijing",
  },
  // 注意：没有 phone 属性
};

// 不用可选链 — 需要层层判断
// const zip = user.address && user.address.zip; // 传统写法

// 可选链 ?.
console.log("user.address?.city:", user.address?.city); // "Beijing"
console.log("user.phone?.number:", user.phone?.number); // undefined（不会报错）
console.log("user.address?.zip:", user.address?.zip); // undefined

// 可选链调用方法
console.log("user.greet?.():", user.greet?.()); // undefined（方法不存在，不报错）

// 空值合并 ??
const city = user.address?.city ?? "Unknown";
const phone = user.phone?.number ?? "No phone";
console.log("\ncity:", city); // "Beijing"
console.log("phone:", phone); // "No phone"

// ?? 和 || 的区别
const count = 0;
console.log("\n--- ?? vs || ---");
console.log("count || 10:", count || 10); // 10（0 是 falsy，触发了默认值）
console.log("count ?? 10:", count ?? 10); // 0 （0 不是 null/undefined，不触发）

const text = "";
console.log('"" || "default":', text || "default"); // "default"
console.log('"" ?? "default":', text ?? "default"); // ""（空字符串不是 null/undefined）

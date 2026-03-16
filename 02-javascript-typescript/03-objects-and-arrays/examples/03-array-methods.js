// ============================================================
// 03 — 数组方法 (Array Methods)
//
// 在终端运行: node 03-array-methods.js
//
// 本文件涵盖：
//   1. map — 映射（转换每个元素）
//   2. filter — 过滤（筛选符合条件的元素）
//   3. reduce — 归约（把数组缩减为单个值）
//   4. find / findIndex — 查找
//   5. some / every — 判断
//   6. flat / flatMap — 扁平化
//   7. 其他常用方法
//   8. 方法链式调用 (Chaining)
//
// 核心思想：
//   这些方法都不会修改原数组，而是返回新数组或新值。
//   它们是函数式编程的基础，掌握后可以用简洁的代码处理数据。
// ============================================================


// 准备测试数据
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const students = [
  { name: "Wenbo", age: 25, score: 92, grade: "A" },
  { name: "Alice", age: 22, score: 88, grade: "B" },
  { name: "Bob", age: 28, score: 95, grade: "A" },
  { name: "Charlie", age: 20, score: 76, grade: "C" },
  { name: "Diana", age: 24, score: 85, grade: "B" },
];


// ============================================================
// PART 1 — map（映射）
//
// 对每个元素执行函数，返回新数组。
// 原数组长度 === 新数组长度（一对一转换）
// ============================================================

console.log("========== PART 1: map ==========\n");

// 基础：每个数字乘以 2
const doubled = numbers.map((n) => n * 2);
console.log("原数组:", numbers);
console.log("乘以2:", doubled);

// 提取对象的某个属性
const names = students.map((s) => s.name);
console.log("\n所有名字:", names);

// 转换数据格式
const summaries = students.map((s) => `${s.name}: ${s.score}分`);
console.log("成绩摘要:", summaries);

// map 的回调有三个参数：(元素, 索引, 原数组)
const indexed = ["a", "b", "c"].map((item, index) => `${index}: ${item}`);
console.log("\n带索引:", indexed);


// ============================================================
// PART 2 — filter（过滤）
//
// 返回满足条件的元素组成的新数组。
// 回调返回 true 保留，false 丢弃。
// ============================================================

console.log("\n\n========== PART 2: filter ==========\n");

// 筛选偶数
const evens = numbers.filter((n) => n % 2 === 0);
console.log("偶数:", evens);

// 筛选大于 5 的数
const greaterThan5 = numbers.filter((n) => n > 5);
console.log("大于5:", greaterThan5);

// 筛选对象
const topStudents = students.filter((s) => s.score >= 90);
console.log("\n90分以上的学生:", topStudents.map((s) => s.name));

const gradeB = students.filter((s) => s.grade === "B");
console.log("B 等级学生:", gradeB.map((s) => s.name));


// ============================================================
// PART 3 — reduce（归约）
//
// 把数组"缩减"为单个值。最强大也最灵活的数组方法。
// 语法：array.reduce((累加器, 当前元素) => 新累加器, 初始值)
// ============================================================

console.log("\n\n========== PART 3: reduce ==========\n");

// 求和
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("求和:", sum);

// 执行过程：
// acc=0,  n=1  → 0+1=1
// acc=1,  n=2  → 1+2=3
// acc=3,  n=3  → 3+3=6
// acc=6,  n=4  → 6+4=10
// ...
// acc=45, n=10 → 45+10=55

// 求最大值
const max = numbers.reduce((acc, n) => (n > acc ? n : acc), -Infinity);
console.log("最大值:", max);

// 计算平均分
const avgScore =
  students.reduce((acc, s) => acc + s.score, 0) / students.length;
console.log("平均分:", avgScore);

// 统计：按等级分组
const grouped = students.reduce((acc, s) => {
  if (!acc[s.grade]) {
    acc[s.grade] = [];
  }
  acc[s.grade].push(s.name);
  return acc;
}, {});
console.log("\n按等级分组:", grouped);

// 统计：计数
const gradeCount = students.reduce((acc, s) => {
  acc[s.grade] = (acc[s.grade] || 0) + 1;
  return acc;
}, {});
console.log("各等级人数:", gradeCount);

// 数组去重
const dupes = [1, 2, 2, 3, 3, 3, 4];
const unique = dupes.reduce((acc, n) => {
  if (!acc.includes(n)) acc.push(n);
  return acc;
}, []);
console.log("\n去重:", unique);
// 注意：实际开发中用 [...new Set(dupes)] 更简洁


// ============================================================
// PART 4 — find / findIndex（查找）
//
// find：返回第一个满足条件的元素（找不到返回 undefined）
// findIndex：返回第一个满足条件的元素的索引（找不到返回 -1）
// ============================================================

console.log("\n\n========== PART 4: find / findIndex ==========\n");

const found = students.find((s) => s.name === "Bob");
console.log("找 Bob:", found);

const notFound = students.find((s) => s.name === "Eve");
console.log("找 Eve:", notFound); // undefined

const index = students.findIndex((s) => s.score >= 95);
console.log("\n第一个95分以上的索引:", index); // 2 (Bob)

// find vs filter 的区别：
// find  → 返回第一个匹配的元素（单个值）
// filter → 返回所有匹配的元素（数组）


// ============================================================
// PART 5 — some / every（判断）
//
// some：是否有至少一个元素满足条件（类似"或"）
// every：是否所有元素都满足条件（类似"与"）
// ============================================================

console.log("\n\n========== PART 5: some / every ==========\n");

// some — 有没有？
const hasTopScorer = students.some((s) => s.score >= 95);
console.log("有95分以上的学生吗?", hasTopScorer); // true

const hasFailing = students.some((s) => s.score < 60);
console.log("有不及格的学生吗?", hasFailing); // false

// every — 全部都是？
const allPassed = students.every((s) => s.score >= 60);
console.log("\n全部及格了吗?", allPassed); // true

const allExcellent = students.every((s) => s.score >= 90);
console.log("全部90分以上吗?", allExcellent); // false


// ============================================================
// PART 6 — flat / flatMap（扁平化）
//
// flat：把嵌套数组"拍平"
// flatMap：先 map 再 flat(1)，一步到位
// ============================================================

console.log("\n\n========== PART 6: flat / flatMap ==========\n");

// flat — 默认展开一层
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("原数组:", nested);
console.log("flat():", nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log("flat(2):", nested.flat(2)); // [1, 2, 3, 4, 5, 6]
console.log("flat(Infinity):", nested.flat(Infinity)); // 无限展开

// flatMap — map + flat(1)
const sentences = ["Hello World", "Good Morning"];
const words = sentences.flatMap((s) => s.split(" "));
console.log("\nflatMap 分词:", words); // ["Hello", "World", "Good", "Morning"]

// 对比：如果只用 map
const wordsNested = sentences.map((s) => s.split(" "));
console.log("map 分词:", wordsNested); // [["Hello", "World"], ["Good", "Morning"]]

// flatMap 实用场景：一对多映射
const classes = [
  { teacher: "老师A", students: ["小明", "小红"] },
  { teacher: "老师B", students: ["小李", "小张", "小王"] },
];
const allStudents = classes.flatMap((c) => c.students);
console.log("\n所有学生:", allStudents);


// ============================================================
// PART 7 — 其他常用方法
// ============================================================

console.log("\n\n========== PART 7: 其他常用方法 ==========\n");

// includes — 是否包含某个值
console.log("[1,2,3].includes(2):", [1, 2, 3].includes(2)); // true
console.log("[1,2,3].includes(5):", [1, 2, 3].includes(5)); // false

// indexOf / lastIndexOf
console.log('[a,b,c,b].indexOf("b"):', ["a", "b", "c", "b"].indexOf("b")); // 1
console.log(
  '[a,b,c,b].lastIndexOf("b"):',
  ["a", "b", "c", "b"].lastIndexOf("b")
); // 3

// forEach — 遍历（不返回新数组）
console.log("\nforEach:");
[10, 20, 30].forEach((n, i) => console.log(`  index ${i}: ${n}`));

// sort — 排序（会修改原数组！）
const nums = [3, 1, 4, 1, 5, 9];
const sorted = [...nums].sort((a, b) => a - b); // 用展开避免修改原数组
console.log("\n原数组:", nums);
console.log("升序:", sorted);
console.log("降序:", [...nums].sort((a, b) => b - a));

// 按分数排序学生
const byScore = [...students].sort((a, b) => b.score - a.score);
console.log("\n按分数降序:", byScore.map((s) => `${s.name}:${s.score}`));

// slice — 截取（不修改原数组）
console.log("\n[1,2,3,4,5].slice(1, 3):", [1, 2, 3, 4, 5].slice(1, 3)); // [2, 3]
console.log("[1,2,3,4,5].slice(-2):", [1, 2, 3, 4, 5].slice(-2)); // [4, 5]

// concat — 合并数组
console.log("\n[1,2].concat([3,4]):", [1, 2].concat([3, 4])); // [1, 2, 3, 4]

// join — 数组转字符串
console.log('["a","b","c"].join("-"):', ["a", "b", "c"].join("-")); // "a-b-c"


// ============================================================
// PART 8 — 链式调用 (Chaining)
//
// 多个方法串在一起，像流水线一样处理数据。
// 这是实际开发中最常见的模式。
// ============================================================

console.log("\n\n========== PART 8: 链式调用 ==========\n");

// 需求：找出 B 等级以上的学生，按分数降序排列，输出 "名字: 分数"
const result = students
  .filter((s) => s.grade === "A" || s.grade === "B") // 筛选 A 和 B
  .sort((a, b) => b.score - a.score) // 按分数降序
  .map((s) => `${s.name}: ${s.score}`); // 格式化输出

console.log("B等级以上，按分数降序:");
result.forEach((r) => console.log("  " + r));

// 需求：求所有偶数的平方和
const sumOfSquares = numbers
  .filter((n) => n % 2 === 0) // [2, 4, 6, 8, 10]
  .map((n) => n * n) // [4, 16, 36, 64, 100]
  .reduce((acc, n) => acc + n, 0); // 220

console.log("\n偶数的平方和:", sumOfSquares);

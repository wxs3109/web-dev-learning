// ============================================================
// 03 — 控制流 (Control Flow)
//
// 在终端运行: node 03-control-flow.js
//
// 本文件涵盖：
//   1. if / else if / else 条件语句
//   2. 三元运算符 (Ternary Operator)
//   3. switch 语句
//   4. for 循环
//   5. while / do...while 循环
//   6. for...of 循环（遍历可迭代对象）
//   7. break 和 continue
// ============================================================


// ============================================================
// PART 1 — if / else if / else
//
// 最基本的条件判断，根据条件的 truthy/falsy 决定执行哪个分支。
// 条件可以是任何表达式，JS 会自动转成 boolean。
// ============================================================

console.log("========== PART 1: if / else if / else ==========\n");

const temperature = 28;

if (temperature >= 35) {
    console.log("太热了！");
} else if (temperature >= 25) {
    console.log("天气不错");      // ← 这个会执行
} else if (temperature >= 15) {
    console.log("有点凉");
} else {
    console.log("很冷！");
}

// 只有一行代码时可以不写 {}，但推荐写上
if (temperature > 20) console.log("温度 > 20");

// 条件中的 truthy/falsy（结合上一个文件的知识）
const username = "";
if (username) {
    console.log("欢迎，" + username);
} else {
    console.log("用户名为空");   // ← 空字符串是 falsy
}


// ============================================================
// PART 2 — 三元运算符 (Ternary Operator)
//
// 语法：条件 ? 值1 : 值2
// 条件为 true 返回值1，否则返回值2。
// 适合简单的二选一，复杂逻辑还是用 if/else。
// ============================================================

console.log("\n========== PART 2: 三元运算符 ==========\n");

const age = 20;
const status = age >= 18 ? "成年人" : "未成年人";
console.log(`${age} 岁 → ${status}`);    // "20 岁 → 成年人"

// 也可以嵌套，但不推荐（可读性差）
const score = 85;
const grade = score >= 90 ? "A"
            : score >= 80 ? "B"
            : score >= 70 ? "C"
            : "D";
console.log(`分数 ${score} → 等级 ${grade}`);   // "B"


// ============================================================
// PART 3 — switch 语句
//
// 适合一个变量需要和多个值比较的场景。
// 注意：switch 用 === 严格比较，不做类型转换。
//
// ⚠️ 最常见的坑：忘写 break！
// 没有 break 会"穿透"到下一个 case，继续执行。
// ============================================================

console.log("\n========== PART 3: switch 语句 ==========\n");

const day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("周一，新的一周开始");
        break;                              // ← 别忘了 break！
    case "Tuesday":
    case "Wednesday":                       // 多个 case 共享同一段代码
    case "Thursday":
        console.log("工作日中间");          // ← Wednesday 会执行这里
        break;
    case "Friday":
        console.log("周五，快到周末了！");
        break;
    case "Saturday":
    case "Sunday":
        console.log("周末！");
        break;
    default:
        console.log("无效的日期");          // 都不匹配时执行
}

// switch 的类型陷阱
const input = "1";
switch (input) {
    case 1:
        console.log("数字 1");
        break;
    case "1":
        console.log("字符串 '1'");    // ← 这个会执行（=== 比较）
        break;
}


// ============================================================
// PART 4 — for 循环
//
// for (初始化; 条件; 更新) { 循环体 }
//
// 执行顺序：
//   1. 初始化（只执行一次）
//   2. 检查条件 → false 则退出
//   3. 执行循环体
//   4. 执行更新
//   5. 回到第 2 步
// ============================================================

console.log("\n========== PART 4: for 循环 ==========\n");

// 基本 for 循环
console.log("从 1 数到 5：");
for (let i = 1; i <= 5; i++) {
    process.stdout.write(`${i} `);   // 不换行打印
}
console.log();  // 换行

// 遍历数组（传统方式）
const fruits = ["苹果", "香蕉", "橙子"];
console.log("遍历数组：");
for (let i = 0; i < fruits.length; i++) {
    console.log(`  fruits[${i}] = ${fruits[i]}`);
}

// 反向遍历
console.log("反向遍历：");
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(`  fruits[${i}] = ${fruits[i]}`);
}

// 步长不是 1
console.log("偶数：");
for (let i = 0; i <= 10; i += 2) {
    process.stdout.write(`${i} `);
}
console.log();


// ============================================================
// PART 5 — while / do...while 循环
//
// while：先判断条件，再执行循环体（可能一次都不执行）
// do...while：先执行一次循环体，再判断条件（至少执行一次）
// ============================================================

console.log("\n========== PART 5: while / do...while ==========\n");

// while 循环
let countdown = 5;
process.stdout.write("倒计时: ");
while (countdown > 0) {
    process.stdout.write(`${countdown} `);
    countdown--;
}
console.log("发射！");

// do...while 循环 —— 至少执行一次
let attempts = 0;
do {
    attempts++;
    console.log(`尝试第 ${attempts} 次`);
} while (attempts < 3);

// while vs do...while 的区别
let n = 0;
while (n > 0) {
    console.log("while: 这行不会打印");  // 条件一开始就是 false，不执行
}
do {
    console.log("do...while: 这行会打印一次"); // 至少执行一次
} while (n > 0);


// ============================================================
// PART 6 — for...of 循环
//
// for...of 用来遍历"可迭代对象"（iterable）：
//   数组、字符串、Map、Set、arguments 等
//
// 比传统 for 循环更简洁，不需要手动维护索引。
//
// 注意：for...of 不能直接遍历普通对象 {}
//   遍历对象用 for...in 或 Object.keys()
// ============================================================

console.log("\n========== PART 6: for...of 循环 ==========\n");

// 遍历数组
const languages = ["JavaScript", "Python", "TypeScript"];
console.log("遍历数组：");
for (const lang of languages) {
    console.log(`  ${lang}`);
}

// 遍历字符串（逐字符）
console.log("遍历字符串 'Hello'：");
for (const char of "Hello") {
    process.stdout.write(`[${char}] `);
}
console.log();

// 如果需要索引，可以用 entries()
console.log("带索引遍历：");
for (const [index, lang] of languages.entries()) {
    console.log(`  ${index}: ${lang}`);
}

// for...in vs for...of
// for...in → 遍历对象的 key（属性名）
// for...of → 遍历可迭代对象的 value（值）
const person = { name: "Alice", age: 25 };
console.log("for...in（遍历对象的 key）：");
for (const key in person) {
    console.log(`  ${key}: ${person[key]}`);
}


// ============================================================
// PART 7 — break 和 continue
//
// break    → 立即退出整个循环
// continue → 跳过本次迭代，进入下一次
// ============================================================

console.log("\n========== PART 7: break 和 continue ==========\n");

// break：找到第一个偶数就停
console.log("break 示例 — 找到第一个偶数：");
const numbers = [1, 3, 7, 8, 5, 10];
for (const num of numbers) {
    if (num % 2 === 0) {
        console.log(`  找到了: ${num}`);
        break;    // 找到 8 后立即退出循环
    }
    console.log(`  ${num} 是奇数，继续找...`);
}

// continue：跳过偶数，只打印奇数
console.log("continue 示例 — 只打印奇数：");
for (const num of numbers) {
    if (num % 2 === 0) continue;  // 跳过偶数
    console.log(`  ${num}`);
}

// 带标签的 break（用于嵌套循环）
console.log("嵌套循环 break 示例：");
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log(`  在 i=${i}, j=${j} 处 break outer`);
            break outer;    // 直接退出外层循环
        }
        console.log(`  i=${i}, j=${j}`);
    }
}

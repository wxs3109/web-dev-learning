// ============================================================
// 04 — 现代语法 (Modern Syntax)
//
// 在终端运行: node 04-modern-syntax.js
//
// 本文件涵盖：
//   1. 模板字符串 (Template Literals)
//   2. 空值合并运算符 ?? (Nullish Coalescing)
//   3. 可选链 ?. (Optional Chaining)
//   4. 短路求值实际用法 (Short-Circuit Patterns)
// ============================================================


// ============================================================
// PART 1 — 模板字符串 (Template Literals)
//
// 用反引号 ` ` 代替普通引号 ' ' 或 " "。
// 三大优势：
//   1. 内嵌表达式 ${...}（变量、运算、函数调用都行）
//   2. 支持多行字符串（不需要 \n）
//   3. 更易读，不用 + 拼接
// ============================================================

console.log("========== PART 1: 模板字符串 ==========\n");

const name = "Alice";
const age = 25;

// 传统拼接 vs 模板字符串
const old = "你好，" + name + "！你今年 " + age + " 岁了。";
const modern = `你好，${name}！你今年 ${age} 岁了。`;
console.log("传统拼接:", old);
console.log("模板字符串:", modern);

// ${} 里可以放任何表达式
console.log(`明年你 ${age + 1} 岁`);
console.log(`是否成年: ${age >= 18 ? "是" : "否"}`);
console.log(`名字大写: ${name.toUpperCase()}`);
console.log(`1 + 2 = ${1 + 2}`);

// 多行字符串
const multiline = `
  第一行
  第二行
  第三行
`;
console.log("多行字符串:", multiline);

// 传统写法需要 \n 换行，很难阅读
const oldMultiline = "第一行\n  第二行\n  第三行";

// 实际应用：HTML 模板
const item = { title: "学习 JS", done: false };
const html = `
  <div class="todo ${item.done ? "completed" : ""}">
    <h3>${item.title}</h3>
    <p>状态: ${item.done ? "已完成" : "未完成"}</p>
  </div>
`;
console.log("HTML 模板:", html);

// 标签模板字符串 (Tagged Template) — 进阶用法
// 在模板字符串前加一个函数名，可以自定义处理方式
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] !== undefined ? `【${values[i]}】` : "");
    }, "");
}
const highlighted = highlight`用户 ${name} 的年龄是 ${age}`;
console.log("标签模板:", highlighted);
// "用户 【Alice】 的年龄是 【25】"


// ============================================================
// PART 2 — 空值合并运算符 ?? (Nullish Coalescing, ES2020)
//
// a ?? b
//   如果 a 是 null 或 undefined → 返回 b
//   否则 → 返回 a
//
// 和 || 的区别：
//   ||  → 遇到任何 falsy 值（0, "", false, null, undefined）就用右边
//   ??  → 只有 null 或 undefined 才用右边
//
// ?? 比 || 更精确，是设默认值的更好选择。
// ============================================================

console.log("\n========== PART 2: ?? 空值合并运算符 ==========\n");

// || 的问题：把 0、""、false 也当作"没有值"
const count1 = 0 || 10;
console.log("0 || 10  →", count1);     // 10（坑！0 是合法值，被覆盖了）

const text1 = "" || "default";
console.log('"" || "default" →', text1);  // "default"（坑！空字符串可能是有意的）

// ?? 只关心 null 和 undefined
const count2 = 0 ?? 10;
console.log("0 ?? 10  →", count2);     // 0（正确！0 不是 null/undefined）

const text2 = "" ?? "default";
console.log('"" ?? "default" →', text2);  // ""（正确！空字符串不是 null/undefined）

// null 和 undefined 才会触发 ??
console.log("null ?? 42      →", null ?? 42);       // 42
console.log("undefined ?? 42 →", undefined ?? 42);  // 42
console.log("false ?? 42     →", false ?? 42);      // false（false 不是 null/undefined）

// 实际用例：从 API 获取配置
const config = { timeout: 0, retries: null };
const timeout = config.timeout ?? 3000;   // 0（保留了用户设的 0）
const retries = config.retries ?? 3;      // 3（null 被替换为默认值）
console.log(`timeout: ${timeout}, retries: ${retries}`);

// ??= 赋值运算符
let setting = null;
setting ??= "默认配置";
console.log("setting ??= →", setting);   // "默认配置"

let setting2 = "已有配置";
setting2 ??= "默认配置";
console.log("setting2 ??= →", setting2); // "已有配置"（不是 null，不会覆盖）


// ============================================================
// PART 3 — 可选链 ?. (Optional Chaining, ES2020)
//
// obj?.prop
//   如果 obj 是 null 或 undefined → 返回 undefined（不报错）
//   否则 → 正常访问 obj.prop
//
// 解决的问题：嵌套访问对象属性时，中间某一层可能是 null/undefined，
// 传统写法需要逐层检查，代码又长又丑。
// ============================================================

console.log("\n========== PART 3: ?. 可选链 ==========\n");

const user = {
    name: "Bob",
    address: {
        city: "Shanghai",
        zip: "200000"
    },
    // 注意：没有 phone 属性
};

// 传统写法：逐层检查，很繁琐
const city1 = user && user.address && user.address.city;
console.log("传统写法:", city1);   // "Shanghai"

// 可选链：简洁安全
const city2 = user?.address?.city;
console.log("可选链:", city2);     // "Shanghai"

// 访问不存在的属性
const phone = user?.phone?.number;
console.log("不存在的属性:", phone);   // undefined（不报错！）

// 不用可选链会怎样？
// const phone2 = user.phone.number;  // ✗ TypeError: Cannot read properties of undefined

// 可选链 + 方法调用
const userWithMethod = {
    greet() { return "hello"; }
};
console.log("方法存在:", userWithMethod.greet?.());      // "hello"
console.log("方法不存在:", userWithMethod.goodbye?.());  // undefined（不报错）

// 可选链 + 数组
const data = { items: ["a", "b", "c"] };
console.log("数组访问:", data?.items?.[0]);     // "a"
console.log("空数组访问:", data?.nothing?.[0]); // undefined

// 可选链 + ??：组合使用，设默认值
const country = user?.address?.country ?? "未知";
console.log("可选链 + ??:", country);   // "未知"

// 实际用例：处理 API 返回值
const apiResponse = {
    data: {
        users: [
            { name: "Alice", profile: { avatar: "alice.png" } },
            { name: "Bob", profile: null }
        ]
    }
};

const avatar1 = apiResponse?.data?.users?.[0]?.profile?.avatar ?? "default.png";
const avatar2 = apiResponse?.data?.users?.[1]?.profile?.avatar ?? "default.png";
console.log("Avatar 1:", avatar1);   // "alice.png"
console.log("Avatar 2:", avatar2);   // "default.png"（profile 是 null）


// ============================================================
// PART 4 — 短路求值实际用法 (Short-Circuit Patterns)
//
// 结合前面学的 &&、||、??，看几个实际开发中常见的模式。
// ============================================================

console.log("\n========== PART 4: 短路求值实际用法 ==========\n");

// 模式 1：&& 代替简单的 if
const isLoggedIn = true;
isLoggedIn && console.log("用户已登录");  // 等同于 if (isLoggedIn) console.log(...)
// 如果 isLoggedIn 为 false，后面的代码不会执行

// 模式 2：|| 提供备用值（注意 0 和 "" 的坑）
const displayName = "" || "匿名用户";
console.log("|| 默认值:", displayName);   // "匿名用户"

// 模式 3：?? 提供备用值（更安全）
const displayName2 = "" ?? "匿名用户";
console.log("?? 默认值:", displayName2);  // ""（空字符串被保留）

// 模式 4：可选链 + ?? 的完整链路
const getCity = (u) => u?.address?.city ?? "未知城市";
console.log("正常用户:", getCity({ address: { city: "Beijing" } }));
console.log("无地址:", getCity({ name: "test" }));
console.log("null:", getCity(null));

// 总结对比
console.log("\n--- || vs ?? 最终总结 ---");
console.log("用 || 当默认值：0、''、false 都会被覆盖（可能不是你想要的）");
console.log("用 ?? 当默认值：只有 null 和 undefined 才被覆盖（更安全）");
console.log("建议：需要默认值时优先用 ??，除非你确实想排除所有 falsy 值\n");

# DOM Manipulation

## Learning Objectives

- Select elements using querySelector, querySelectorAll, and getElementById
- Create, modify, and remove DOM elements programmatically
- Use the classList API to manage CSS classes
- Understand the difference between attributes and properties
- Distinguish between innerHTML and textContent
- Insert content with insertAdjacentHTML / insertAdjacentElement
- Optimize DOM updates with document fragments
- Observe DOM changes with MutationObserver
- Handle events with addEventListener and removeEventListener
- Understand event bubbling, capturing, and delegation
- Use common event types: click, input, keydown, submit, focus/blur

## Key Concepts

The Document Object Model (DOM) is the browser's representation of an HTML document as a tree of objects. JavaScript interacts with this tree to dynamically update content, structure, and styling. Efficient DOM manipulation is key to building responsive, interactive web applications.

## Topics Covered

| File | Topics |
| ---- | ------ |
| `01-selecting-elements.html` | querySelector, querySelectorAll, getElementById, CSS selector syntax, HTMLCollection vs NodeList |
| `02-creating-modifying-removing.html` | createElement, appendChild, textContent vs innerHTML, style modification, remove(), insertAdjacentHTML |
| `03-classlist-attributes.html` | classList API, getAttribute/setAttribute, attributes vs properties, data-* attributes |
| `04-fragments-observer.html` | DocumentFragment, performance comparison, MutationObserver |
| `05-events.html` | addEventListener, Event object, bubbling/capturing, event delegation, common event types |

## Prerequisites

- 01-js-fundamentals
- 02-functions-and-scope
- 03-objects-and-arrays

## Resources

### MDN Web Docs（官方文档 — 首选参考）

- [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [Element.insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
- [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
- [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events) — 所有浏览器事件的完整列表

### 延伸阅读（适合初学者的叙述式讲解）

- [javascript.info — DOM](https://javascript.info/document) — 比 MDN 更友好，有中文版
- [javascript.info — Events](https://javascript.info/events) — 事件系统完整讲解
- [javascript.info — Event delegation](https://javascript.info/event-delegation) — 事件委托深入讲解

## Exercises

每个示例文件末尾都有内嵌的练习挑战。以下是按难度排列的独立练习：

### 基础

1. **选择器练习** — 在 `01-selecting-elements.html` 的沙盒中尝试不同 CSS 选择器
2. **创建列表** — 用 `createElement` + `appendChild` 动态创建一个有 5 项的有序列表
3. **classList 切换** — 实现点击切换显示/隐藏（`.hidden { display: none }` + `classList.toggle`）

### 进阶

1. **可编辑 Todo 列表** — 结合 `createElement` 和事件处理：输入框按 Enter 添加，事件委托删除
2. **实时表单验证** — 用 `input` 事件实时校验邮箱/密码，用 `classList.toggle` 切换校验状态样式
3. **insertAdjacentHTML 布局** — 不获取父元素引用，用 `beforebegin`/`afterend` 在目标元素前后动态注入内容

### 挑战

1. **性能对比实验** — 分别用逐个 `appendChild`、`DocumentFragment`、`innerHTML` 添加 10000 个元素，记录并比较耗时
2. **MutationObserver 字数计数器** — 监听 `contenteditable` 元素的文本变化，实时更新字数统计
3. **自定义 Accordion** — 点击标题展开/收起内容，支持多个面板，用事件委托统一处理所有面板的点击

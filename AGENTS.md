# AGENTS.md

## Project Purpose / 项目目标
This repository is a structured front-end learning project covering HTML/CSS, JavaScript/TypeScript, Angular, and web fundamentals.

这个仓库是一个结构化的前端学习项目，覆盖 HTML/CSS、JavaScript/TypeScript、Angular 和 Web Fundamentals。

Treat this repo as a teaching codebase, not a production app.

将这个仓库视为教学型代码仓库，而不是生产应用。

## Priorities / 优先级
When making changes, optimize for:
1. Concept clarity
2. Correctness
3. Readability
4. Small, focused examples
5. Consistency with the current module's difficulty level

做修改时，优先保证：
1. 概念清晰
2. 内容正确
3. 代码易读
4. 示例小而聚焦
5. 难度与当前模块匹配

Do not optimize for abstraction, reusability, or architecture unless the user explicitly asks for that.

除非用户明确要求，否则不要优先追求抽象、复用性或工程架构。

## Repository Conventions / 仓库约定
- Each topic folder may contain:
  - `README.md` for learning objectives, concepts, and resources
  - `examples/` for small reference demos
  - `exercises/` for learner practice
  - `notes/` for supporting explanations
- Keep content in the correct module. Do not move material across sections unless requested.

- 每个主题目录通常包含：
  - `README.md`: 学习目标、概念、资源
  - `examples/`: 小型参考示例
  - `exercises/`: 练习题
  - `notes/`: 补充说明
- 内容应放在正确模块下。除非用户要求，不要跨章节移动材料。

## Example File Rules / 示例文件规则
- For HTML/CSS and DOM fundamentals, prefer self-contained examples in a single file when that makes learning easier.
- Do not split simple examples into separate CSS/JS files unless the lesson is specifically about file organization or external assets.
- Keep examples minimal and directly tied to the concept being taught.
- Avoid introducing build tools, package dependencies, frameworks, or app structure into basic examples.

- 在 HTML/CSS 和 DOM 基础内容中，如果单文件更利于理解，优先使用自包含示例。
- 对简单示例，不要随意拆成独立 CSS/JS 文件；只有当课程主题本身就是文件组织或外部资源时才这样做。
- 示例应尽量精简，并直接服务于正在讲解的概念。
- 在基础示例中，避免引入构建工具、包依赖、框架或复杂应用结构。

## Teaching Style / 教学风格
- Match the difficulty of the current folder.
- Do not introduce advanced concepts before they are needed.
- Prefer explicit code over clever code.
- Use comments sparingly to explain non-obvious concepts, tradeoffs, or browser behavior.
- Avoid noisy comments that restate the code line by line.

- 内容难度应匹配当前目录主题。
- 不要提前引入尚未需要的高级概念。
- 优先选择直白、易理解的代码，而不是炫技式写法。
- 注释只在解释不明显的概念、取舍或浏览器行为时使用。
- 避免逐行复述代码含义的噪声注释。

## Editing Guidance / 编辑指导
- Preserve the existing teaching intent of a file.
- If improving an example, keep the original concept visible.
- Prefer incremental edits over full rewrites.
- If a file has obvious encoding or mojibake issues, preserve meaning and avoid making them worse. Prefer UTF-8-safe edits.

- 保留文件原有的教学意图。
- 如果改进示例，原始概念仍应清晰可见。
- 优先做增量修改，不要默认整文件重写。
- 如果文件存在编码或乱码问题，应尽量保持原意，不要让问题扩大；优先使用对 UTF-8 安全的编辑方式。

## Content Quality / 内容质量
- Fix factual mistakes clearly.
- Call out accessibility issues when relevant, especially in HTML/CSS examples.
- Prefer semantic HTML when it supports the lesson.
- For JavaScript examples, favor browser-native APIs and clear naming.

- 发现事实错误时，应直接修正。
- 在相关场景下指出可访问性问题，尤其是 HTML/CSS 示例。
- 在不影响教学重点的前提下，优先使用语义化 HTML。
- JavaScript 示例优先使用浏览器原生 API 和清晰命名。

## Response Expectations / 响应预期
- When the user asks a conceptual question about a file, inspect the file first and answer in the context of that file.
- When making teaching edits, briefly explain what changed and why in learning terms.
- If there is a tradeoff between real-world best practice and beginner clarity, prefer beginner clarity unless the user asks for production-style guidance.
- Prefer answering the user in Chinese unless they ask for English.

- 当用户就某个文件提出概念问题时，先查看文件，再结合该文件上下文回答。
- 做教学型修改时，简要说明改了什么，以及这对学习有什么帮助。
- 如果“真实项目最佳实践”和“新手理解成本”之间有冲突，默认优先照顾新手理解，除非用户明确要求生产级写法。
- 默认优先使用中文回答，除非用户要求英文。

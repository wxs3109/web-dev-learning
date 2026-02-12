# Interactive Todo App

Build a to-do list application with vanilla JavaScript. This project focuses on DOM manipulation, event handling, data persistence, and applying object-oriented patterns in a real-world scenario.

## Features to Implement

- **Add tasks** — users can type a task and add it to the list
- **Edit tasks** — inline editing of existing task text
- **Delete tasks** — remove individual tasks from the list
- **Mark as complete** — toggle a task's completion status with a checkbox or click
- **Filter by status** — filter the displayed tasks by All, Active, or Completed
- **Persist to localStorage** — all tasks survive a page reload via localStorage
- **Keyboard shortcuts** — support Enter to add a task, Escape to cancel editing, and other convenient shortcuts

## Skills Practiced

This project draws from the following learning modules:

| Module | Topic |
|---|---|
| 02-js-ts/03 | Objects and Arrays |
| 02-js-ts/04 | DOM Manipulation |
| 02-js-ts/05 | Events and Delegation |
| 02-js-ts/09 | ES6 Classes |
| 02-js-ts/10 | Error Handling |

## Technical Requirements

- Use vanilla JavaScript only (no frameworks or libraries)
- Organize task logic using ES6 classes (e.g., a `Task` class and a `TodoApp` class)
- Use event delegation on the task list container rather than attaching listeners to every item
- Validate user input and handle edge cases (empty input, duplicate tasks, etc.) with proper error handling
- Store tasks as a JSON array in localStorage; load them on page initialization
- Provide visual feedback for user actions (e.g., strikethrough for completed tasks, transition on delete)

## Stretch Goals

- **Drag-and-drop reordering** — allow users to reorder tasks by dragging them
- **Categories/tags** — assign categories or tags to tasks and filter by them
- **Export to JSON** — add a button to download the current task list as a JSON file

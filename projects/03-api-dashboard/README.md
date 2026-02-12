# API Dashboard

Build a data dashboard that fetches data from a public REST API (e.g., JSONPlaceholder, OpenWeatherMap, or GitHub API). This project focuses on asynchronous JavaScript, API integration, error handling, and presenting data in a clean, responsive layout.

## Features to Implement

- **Fetch and display data** — retrieve data from a public API and render it dynamically in the DOM
- **Search/filter** — allow users to search or filter the displayed data by keyword or category
- **Loading states** — show a loading indicator while data is being fetched
- **Error handling with user feedback** — display clear error messages when API requests fail (network error, 404, rate limit, etc.)
- **Responsive card/table layout** — present data in a card grid or table that adapts to different screen sizes

## Skills Practiced

This project draws from the following learning modules:

| Module | Topic |
|---|---|
| 02-js-ts/06 | Async/Await |
| 02-js-ts/07 | Fetch API |
| 02-js-ts/04 | DOM Manipulation |
| 02-js-ts/05 | Events |
| 01-html-css/07 | CSS Grid Layout |
| 01-html-css/08 | Responsive Design |

## Technical Requirements

- Use the Fetch API with async/await syntax (no Axios or other libraries)
- Implement proper error handling: try/catch around fetch calls, check response status, and display user-friendly error messages
- Show a loading spinner or skeleton UI while waiting for responses
- Implement a debounced search input to filter results without excessive re-renders
- Use CSS Grid or Flexbox for the data layout; the dashboard should be responsive across mobile, tablet, and desktop
- Use vanilla JavaScript (no frameworks)

## Stretch Goals

- **Pagination** — handle large datasets with client-side or API-driven pagination (next/previous or infinite scroll)
- **Data caching** — cache API responses in localStorage or sessionStorage to reduce redundant network requests
- **Chart visualization** — integrate a lightweight charting library (e.g., Chart.js) to visualize data trends

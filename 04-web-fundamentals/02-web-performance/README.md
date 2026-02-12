# Web Performance

Techniques and metrics for building fast web experiences. Covers Core Web Vitals, the critical rendering path, asset optimization, caching strategies, and performance measurement tools.

## Learning Objectives

- Define and measure Core Web Vitals (LCP, INP, CLS)
- Understand the critical rendering path and how to optimize it
- Apply image, font, and code optimization techniques
- Implement HTTP caching strategies for faster repeat visits
- Use performance measurement tools to identify bottlenecks

## Key Concepts

- Core Web Vitals as user-centric performance metrics
- Critical rendering path optimization
- Asset optimization (images, fonts, code)
- HTTP caching and service workers
- Performance budgets and monitoring

## Topics Covered

### Core Web Vitals
- **LCP (Largest Contentful Paint)** — measures loading performance, target < 2.5s
- **INP (Interaction to Next Paint)** — measures interactivity/responsiveness, target < 200ms
- **CLS (Cumulative Layout Shift)** — measures visual stability, target < 0.1

### Critical Rendering Path
- HTML parsing, CSS parsing, JavaScript execution order
- Render-blocking vs. non-render-blocking resources
- Strategies: async/defer scripts, inlining critical CSS, preloading key resources

### Code Splitting
- Dynamic imports and lazy loading
- Route-based and component-based splitting
- Bundle analysis and reducing initial payload

### Image Optimization
- Modern formats: WebP, AVIF
- Compression techniques (lossy vs. lossless)
- Responsive images (`srcset`, `sizes`, `<picture>`)
- Lazy loading with `loading="lazy"` and Intersection Observer

### Font Loading Strategies
- `font-display` property (swap, fallback, optional)
- Preloading fonts with `<link rel="preload">`
- Subsetting and self-hosting fonts
- Avoiding FOIT and FOUT

### HTTP Caching
- `Cache-Control` headers (max-age, no-cache, no-store, immutable)
- ETags and conditional requests (304 Not Modified)
- Service workers introduction — offline caching and cache-first strategies

### Performance Measurement Tools
- Chrome DevTools Performance panel
- Lighthouse scores and audits
- WebPageTest
- Real User Monitoring (RUM) vs. synthetic testing

## Prerequisites

- Browser & DevTools module (01)
- Basic HTML, CSS, and JavaScript knowledge

## Resources

TODO

## Exercises

TODO

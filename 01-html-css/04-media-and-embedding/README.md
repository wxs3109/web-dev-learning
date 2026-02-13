# Media and Embedding

## Learning Objectives
- Embed images with responsive techniques using srcset and the picture element
- Add video and audio content with appropriate controls and fallbacks
- Embed external content using iframes responsibly
- Use inline SVG for scalable graphics
- Understand the basics of the canvas element
- Implement lazy loading for performance optimization

## Key Concepts
Modern web pages go far beyond text. Images, video, audio, and embedded content are essential parts of the user experience. HTML provides native elements for all of these media types along with powerful features for responsive images and performance optimization. This module covers how to embed media effectively and efficiently.

## Topics Covered
- The `<img>` element and its core attributes (`src`, `alt`, `width`, `height`)
- Responsive images with `srcset` and `sizes` attributes
- The `<picture>` element for art direction and format selection
- The `<video>` element: `controls`, `autoplay`, `loop`, `muted`, `poster`, `<source>`
- The `<audio>` element and its attributes
- Embedding with `<iframe>`: `src`, `sandbox`, `allow`, `loading`
- Inline SVG basics and when to use SVG vs. raster images
- Introduction to `<canvas>` and its 2D drawing context
- Native lazy loading with `loading="lazy"`
- The `decoding` attribute for images
- Accessibility considerations for media elements

## Prerequisites
- 01-html-fundamentals
- 02-semantic-html

## Examples

| File | Concepts |
| --- | --- |
| [01-images-responsive-and-picture.html](examples/01-images-responsive-and-picture.html) | img attributes, srcset/sizes, picture, loading="lazy", decoding, image accessibility |
| [02-video-and-audio.html](examples/02-video-and-audio.html) | video controls/autoplay/loop/muted/poster/source, audio/source, media fallbacks, accessibility notes |
| [03-iframe-svg-canvas.html](examples/03-iframe-svg-canvas.html) | iframe src/sandbox/allow/loading, inline SVG basics, canvas 2D intro, SVG vs raster usage |

## Resources
- [MDN: Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [MDN: Video and audio content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [MDN: iframe element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
- [MDN: SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [MDN: canvas element](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

## Exercises
- TODO: Add exercises

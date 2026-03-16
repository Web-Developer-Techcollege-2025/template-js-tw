# template-js-tw

A minimal JavaScript + Tailwind CSS template powered by Vite, created by [JLHammer](https://github.com/JLHammer/)

## Getting Started

1. Clone the repo
2. Run `npm install`
3. Open in VS Code — accept the recommended extensions prompt
4. Run `npm run dev` to start developing

## Adapting for a New Project

1. Update `package.json` — change `name` and reset `version` to `0.1.0` (major.minor.patch)
2. Replace `public/favicon-placeholder.png` — swap in your own static assets
3. Update `index.html` — change the `<title>`
4. Keep or delete the utility functions in `src/utils/` — use what you need, remove what you don't
5. Clear out `main.js` — delete everything after `import './style.css'`, then either keep `const app = get('#app');` as your entry point (and keep the `get` import) or remove it too if you're not using the `get` util

## Utils

A set of lightweight DOM utility functions is included in `src/utils/`. Note that `main.js` includes usage examples of some of the utils.

| Function                        | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `get(target)`                   | Query a DOM element by selector                |
| `create(el, classes)`           | Create a new DOM element with optional classes |
| `set(element, target)`          | Append one or more elements to a target        |
| `remove(target)`                | Remove a DOM element by selector               |
| `addClass(element, classes)`    | Add one or more classes to an element          |
| `removeClass(element, classes)` | Remove one or more classes from an element     |
| `toggleClass(element, classes)` | Toggle one or more classes on an element       |
| `setText(element, text)`        | Set the text content of an element             |
| `setHTML(element, html)`        | Set the inner HTML of an element               |

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

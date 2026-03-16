# template-js-tw

A minimal JavaScript + Tailwind CSS template powered by Vite, created by [JLHammer](https://github.com/JLHammer/)

## Purpose

This template is intended for quickly starting small JavaScript projects with Tailwind CSS and sensible development defaults.

## Getting Started

1. Clone the repo
2. Use Node.js 20+ (`node -v`)
3. Open the project folder in your editor of choice (VS Code recommended)
4. Open a terminal in the project root (if you're using VS Code: Terminal -> New Terminal)
5. If you're using VS Code, accept the recommended extensions prompt
6. Run `npm install`
7. Run `npm run dev` to start developing
8. Run `npm run lint` to verify everything is set up correctly

## Adapting for a New Project

1. Update `package.json` — change `name` and reset `version` to `0.1.0` (major.minor.patch)
2. Replace `public/favicon-placeholder.png` — swap in your own static assets
3. Update `index.html` — change the `<title>`
4. Keep or delete the utility functions in `src/utils/` — use what you need, remove what you don't
5. Treat `main.js` as demo starter code — keep what you want, then delete the rest. At minimum, delete everything after `import './style.css'`, then either keep `const app = get('#app');` as your entry point (and keep the `get` import) or remove it too if you're not using the `get` util
6. Run `npm run lint` after your first changes to catch simple mistakes early

## Utils

A set of lightweight DOM utility functions is included in `src/utils/`. Note that `main.js` includes usage examples of some of the utils.

| Function                        | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `get(target)`                   | Query a DOM element by selector                |
| `create(el, classes)`           | Create a new DOM element with optional classes |
| `set(element, target)`          | Append one or more elements to a target        |
| `remove(target)`                | Remove a DOM element by selector or reference  |
| `addClass(element, classes)`    | Add one or more classes to an element          |
| `removeClass(element, classes)` | Remove one or more classes from an element     |
| `toggleClass(element, classes)` | Toggle one or more classes on an element       |
| `setText(element, text)`        | Set the text content of an element             |
| `setHTML(element, html)`        | Set inner HTML on an element                   |

Note: `setHTML` does not sanitize content. Only use it with trusted HTML.

## Scripts

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start development server         |
| `npm run build`        | Build for production             |
| `npm run preview`      | Preview production build         |
| `npm run lint`         | Run ESLint checks                |
| `npm run format`       | Format the project with Prettier |
| `npm run format:check` | Check formatting with Prettier   |

If `npm run format:check` reports style issues on first clone, run `npm run format` once and re-run the check.

## License

MIT. See LICENSE.

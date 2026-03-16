// Toggles one or more classes on a DOM element — adds if missing, removes if present
export function toggleClass(element, classes) {
  classes.split(' ').forEach((cls) => element.classList.toggle(cls));
}

// toggleClass(div, 'hidden')
// toggleClass(div, 'hidden font-bold')

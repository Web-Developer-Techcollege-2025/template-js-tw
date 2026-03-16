// Removes the first DOM element matching a CSS selector
export function remove(target) {
  document.querySelector(target)?.remove();
}

// remove('#app')

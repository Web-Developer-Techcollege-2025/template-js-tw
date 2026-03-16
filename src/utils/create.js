// Creates and returns a new DOM element with optional classes
export function create(el, classes) {
  const element = document.createElement(el);
  if (classes) element.className = classes;
  return element;
}

// const div = create('div', 'text-red-500 font-bold')

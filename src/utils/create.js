// Creates and returns a new DOM element with optional classes
export function create(element, classes) {
  const createdElement = document.createElement(element);
  if (classes) createdElement.className = classes;
  return createdElement;
}

// const div = create('div', 'text-red-500 font-bold')

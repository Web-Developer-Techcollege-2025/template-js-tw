// Adds one or more classes to a DOM element
export function addClass(element, classes) {
  element.classList.add(...classes.split(' '));
}

// addClass(div, 'text-red-500 font-bold')

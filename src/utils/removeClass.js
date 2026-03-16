// Removes one or more classes from a DOM element
export function removeClass(element, classes) {
  element.classList.remove(...classes.split(' '));
}

// removeClass(div, 'text-red-500 font-bold')

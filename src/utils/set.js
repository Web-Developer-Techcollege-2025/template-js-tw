// Appends one or more DOM elements to a target element
export function set(element, target) {
  if (Array.isArray(element)) {
    element.forEach((childElement) => target.appendChild(childElement));
  } else target.appendChild(element);
}

// set(div, app)
// set([div, header, footer], app)

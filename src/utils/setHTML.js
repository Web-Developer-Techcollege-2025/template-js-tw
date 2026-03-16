// Sets the inner HTML of a DOM element — only use with trusted content
export function setHTML(element, html) {
  element.innerHTML = html;
}

// setHTML(div, '<span>Hello</span>')

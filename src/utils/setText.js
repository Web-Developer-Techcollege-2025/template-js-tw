// Sets the text content of a DOM element — XSS-safe, no HTML parsing
export function setText(element, text) {
  element.textContent = text;
}

// setText(div, 'Hello world')

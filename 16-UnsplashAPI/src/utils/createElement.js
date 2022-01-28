export const createElement = (elementType, elClassName) => {
  const element = document.createElement(elementType)
  element.className = elClassName

  return element
}

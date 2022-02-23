export const createElement = (elType, elClassName) => {
  const el = document.createElement(elType)
  elClassName && (el.className = elClassName)

  return el
}

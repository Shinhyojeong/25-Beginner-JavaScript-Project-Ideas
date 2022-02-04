export const createElement = (elType, elClassName) => {
  const el = document.createElement(elType)
  el.className = elClassName

  return el
}

export const createElement = (elType, elClassName) => {
  const targetEl = document.createElement(elType)
  targetEl.className = elClassName

  return targetEl
}

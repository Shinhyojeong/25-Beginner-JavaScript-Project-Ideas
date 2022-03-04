export const applyClassName = (el, elClassName) => {
  elClassName &&
    elClassName.split(' ').forEach((className) => {
      el.classList.add(className)
    })
}

export const createElement = (elType, elClassName) => {
  const el = document.createElement(elType)
  applyClassName(el, elClassName)

  return el
}

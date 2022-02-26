export const applyClassName = (el, elClassName) => {
  elClassName.split(' ').forEach((item) => {
    el.classList.add(item)
  })
}

export const createElement = (elType, elClassName) => {
  const el = document.createElement(elType)
  elClassName && applyClassName(el, elClassName)

  return el
}

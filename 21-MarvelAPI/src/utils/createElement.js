export const createElement = (elType, elClassName) => {
  const el = document.createElement(elType)
  elClassName &&
    elClassName.split(' ').forEach((item) => {
      el.classList.add(item)
    })

  return el
}

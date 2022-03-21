export const applyClassName = (el, elClassName) => {
  el.removeAttribute('class')

  elClassName &&
    elClassName.split(' ').forEach((className) => {
      el.classList.add(className)
    })
}

export const createElement = (elType = 'div', elClassName) => {
  const el = document.createElement(elType)
  applyClassName(el, elClassName)

  return el
}

export const disabledBtns = (btnList, disabled = false) => {
  const updateBtnList = Array.isArray(btnList) === true ? btnList : [btnList]

  updateBtnList?.forEach((btn) => {
    btn.setState({
      ...btn.state,
      disabled,
    })
  })
}

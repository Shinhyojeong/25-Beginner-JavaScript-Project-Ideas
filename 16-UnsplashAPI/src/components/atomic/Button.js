import { createElement } from '../../utils/createElement.js'

export default function Button({ targetEl, initialState, onClick }) {
  this.state = initialState

  const { elClassName, content, value } = this.state
  const btnEl = createElement('button', elClassName)
  btnEl.setAttribute('value', value)

  btnEl.innerHTML = `${content}`

  targetEl.append(btnEl)

  btnEl.addEventListener('click', (e) => {
    const { target } = e

    if (!target.value) {
      return
    }

    onClick(target)
  })
}

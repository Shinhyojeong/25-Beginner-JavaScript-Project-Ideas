import { createElement } from '../../utils/createElement.js'

export default function Input({ targetEl, initialState, onKeyUp }) {
  this.state = initialState

  const { elClassName, elPlaceholder } = this.state

  const inputEl = createElement('input', elClassName)
  inputEl.setAttribute('placeholder', elPlaceholder)

  targetEl.append(inputEl)

  inputEl.addEventListener('keyup', (e) => {
    onKeyUp(e)
  })
}

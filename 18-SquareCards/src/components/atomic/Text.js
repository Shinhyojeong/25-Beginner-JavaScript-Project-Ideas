import { createElement } from '../../utils/createElement.js'

export default function Text({ targetEl, initialState }) {
  this.state = initialState

  const { elType, elClassName, content } = this.state
  const textContainerEl = createElement(elType, elClassName)

  textContainerEl.innerHTML = `${content}`

  targetEl.append(textContainerEl)
}

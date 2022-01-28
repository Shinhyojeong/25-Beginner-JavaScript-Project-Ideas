import { createElement } from '../utils/createElement.js'

export default function Text({ targetEl, initialState }) {
  this.state = initialState

  const { containerType, elClassName, content } = this.state
  const textContainerEl = createElement(containerType, elClassName)

  textContainerEl.innerHTML = `${content}`

  targetEl.append(textContainerEl)
}

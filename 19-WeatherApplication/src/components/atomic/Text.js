import { createElement } from '../../utils/createElement.js'

export default function Text({ targetEl, initialState }) {
  const { elType, elClassName } = initialState
  const textEl = createElement(elType, elClassName)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { content } = this.state

    content && (textEl.innerHTML = `${content}`)
  }

  this.render()
  targetEl.append(textEl)
}

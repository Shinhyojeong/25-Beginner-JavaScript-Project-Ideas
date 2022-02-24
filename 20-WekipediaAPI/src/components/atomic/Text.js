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
    textEl.innerHTML = `${this.state.content}`
  }

  this.render()
  targetEl.append(textEl)
}

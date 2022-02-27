import { createElement, applyClassName } from '../../utils/createElement.js'

export default function Text({ targetEl, initialState }) {
  const textEl = createElement(initialState.elType)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, content } = this.state

    textEl.innerHTML = `${content}`
    applyClassName(textEl, elClassName)
  }

  this.render()
  targetEl.append(textEl)
}

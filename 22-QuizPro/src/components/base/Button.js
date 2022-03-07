import { applyClassName, createElement } from '../../utils/createElement.js'

export default function Button({ targetEl, initialState }) {
  const buttonEl = createElement('button')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, content } = this.state

    applyClassName(buttonEl, elClassName)
    buttonEl.innerHTML = `${content}`
  }

  this.render()
  targetEl.append(buttonEl)
}

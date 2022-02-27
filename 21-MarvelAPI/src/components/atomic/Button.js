import { createElement, applyClassName } from '../../utils/createElement.js'

export default function Button({ targetEl, initialState, onClick }) {
  const buttonEl = createElement('button')
  buttonEl.type = 'button'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, content } = this.state

    buttonEl.innerHTML = `${content}`
    applyClassName(buttonEl, elClassName)
  }

  this.render()
  targetEl.append(buttonEl)

  buttonEl.addEventListener('click', (e) => {
    onClick(e)
  })
}

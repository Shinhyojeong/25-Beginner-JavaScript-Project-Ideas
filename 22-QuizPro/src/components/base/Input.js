import { createElement, applyClassName } from '../../utils/createElement.js'

export default function Input({ targetEl, initialState, onKeyUp }) {
  const inputEl = createElement('input')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, elPlaceholder } = this.state

    applyClassName(inputEl, elClassName)
    inputEl.placeholder = elPlaceholder
  }

  this.render()
  targetEl.append(inputEl)

  inputEl.addEventListener('keyup', (e) => {
    onKeyUp(e)
  })
}

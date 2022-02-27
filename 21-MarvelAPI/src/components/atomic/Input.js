import { createElement, applyClassName } from '../../utils/createElement.js'

export default function App({ targetEl, initialState, onKeyUp }) {
  const inputEl = createElement('input')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elPlaceholder, elClassName } = this.state

    inputEl.placeholder = elPlaceholder
    applyClassName(inputEl, elClassName)
  }

  this.render()
  targetEl.append(inputEl)

  inputEl.addEventListener('keyup', (e) => {
    onKeyUp(e)
  })
}

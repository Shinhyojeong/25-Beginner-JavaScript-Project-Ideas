import { createElement } from '../../utils/createElement.js'

export default function App({ targetEl, initialState, onKeyUp }) {
  const inputEl = createElement('input', initialState.elClassName)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elPlaceholder, elClassName } = this.state

    inputEl.className = elClassName
    inputEl.placeholder = elPlaceholder
  }

  this.render()
  targetEl.append(inputEl)

  inputEl.addEventListener('keyup', (e) => {
    onKeyUp(e)
  })
}

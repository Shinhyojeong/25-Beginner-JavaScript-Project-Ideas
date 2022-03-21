import { applyClassName, createElement } from '@utils/handleElement'

export default function Button({ targetEl, initialState, onClick }) {
  const buttonEl = createElement('button')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, content, disabled } = this.state

    applyClassName(buttonEl, elClassName)
    buttonEl.innerHTML = `${content}`
    disabled
      ? (buttonEl.disabled = 'disabled')
      : buttonEl.removeAttribute('disabled')
  }

  this.render()
  targetEl.append(buttonEl)

  buttonEl.addEventListener('click', (e) => {
    onClick(e)
  })
}

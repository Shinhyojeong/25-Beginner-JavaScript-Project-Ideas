import Text from '../atomic/Text.js'
import { applyClassName, createElement } from '../../utils/createElement.js'

export default function TextBox({ targetEl, initialState }) {
  const textBoxEl = createElement('div')

  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, title, content } = this.state

    textBoxEl.innerHTML = ``
    applyClassName(textBoxEl, elClassName)

    new Text({
      targetEl: textBoxEl,
      initialState: {
        elType: 'p',
        elClassName: `text-title`,
        content: title,
      },
    })

    new Text({
      targetEl: textBoxEl,
      initialState: {
        elType: 'p',
        elClassName: `text-content`,
        content,
      },
    })
  }

  this.render()
  targetEl.append(textBoxEl)
}

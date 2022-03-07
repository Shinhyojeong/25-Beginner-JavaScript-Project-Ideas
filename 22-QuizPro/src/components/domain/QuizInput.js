import { createElement } from '../../utils/createElement.js'
import { Button, Input } from '../base/index.js'

export default function QuizInput({ targetEl, initialState }) {
  const quizInputEl = createElement('div', 'quiz-container')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { iconUrl, elPlaceholder } = this.state

    quizInputEl.innerHTML = ``

    new Button({
      targetEl: quizInputEl,
      initialState: {
        elClassName: 'quiz-btn',
        content: `<img src=${iconUrl} alt ="quiz-icon">`,
      },
    })

    new Input({
      targetEl: quizInputEl,
      initialState: {
        elClassName: 'quiz-input',
        elPlaceholder,
      },
    })
  }

  this.render()
  targetEl.append(quizInputEl)
}

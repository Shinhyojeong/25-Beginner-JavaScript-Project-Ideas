import { createElement } from '../../utils/createElement.js'
import { Button, Input } from '../base/index.js'

export default function QuizInput({ targetEl, initialState, onSubmit }) {
  const quizInputEl = createElement('div', 'quiz-container')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    quizBtn.setState({
      ...quizBtn.state,
      elClassName: this.state.btnClassName,
    })
  }

  const { iconUrl, elPlaceholder, id, btnClassName } = this.state

  quizInputEl.innerHTML = ``
  quizInputEl.dataset.id = id

  const quizBtn = new Button({
    targetEl: quizInputEl,
    initialState: {
      elClassName: btnClassName,
      content: `<img src=${iconUrl} alt ="quiz-icon">`,
    },
    onClick: (e) => {
      const selectedItemEl = e.target.closest('.quiz-container')

      if (!selectedItemEl) {
        return
      }

      const id = selectedItemEl.dataset.id
      onSubmit(id)
    },
  })

  new Input({
    targetEl: quizInputEl,
    initialState: {
      elClassName: 'quiz-input',
      elPlaceholder,
    },
  })

  targetEl.append(quizInputEl)
}

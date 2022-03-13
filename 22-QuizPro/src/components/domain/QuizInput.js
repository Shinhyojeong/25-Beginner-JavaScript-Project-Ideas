import { createElement } from '../../utils/createElement.js'
import { Button, Input } from '../base/index.js'
import { resetForm } from '../../utils/customEvent.js'

export default function QuizInput({
  targetEl,
  initialState,
  onClick,
  onKeyUp,
}) {
  const quizInputEl = createElement('div', 'quiz-container')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    quizBtn.setState({
      ...quizBtn.state,
      elClassName: this.state.btnClassName,
    })
  }

  const { iconUrl, elPlaceholder, id, btnClassName, selectable } = this.state

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

      if (selectedItemEl && selectable) {
        const { id } = selectedItemEl.dataset

        onClick(id)
      }
    },
  })

  const quizInput = new Input({
    targetEl: quizInputEl,
    initialState: {
      elClassName: 'quiz-input',
      elPlaceholder,
    },
    onKeyUp: (e) => {
      const { value } = e.target

      if (!value) {
        return
      }

      onKeyUp(value, id)
    },
  })

  targetEl.append(quizInputEl)
  resetForm(() =>
    quizInput.setState({
      ...quizInput.state,
      inputValue: null,
    })
  )
}

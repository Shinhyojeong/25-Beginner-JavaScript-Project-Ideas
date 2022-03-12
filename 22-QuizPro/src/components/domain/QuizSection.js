import { createElement, applyClassName } from '../../utils/createElement.js'
import { QuizInput } from './index.js'
import { Text } from '../base/index.js'

export default function QuizSection({ targetEl, initialState }) {
  const quizSectionEl = createElement('div')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  const { title, numberOfInput, inputIconUrl, inputPlaceholder, elClassName } =
    this.state
  let quizInputArray = []

  quizSectionEl.innerHTML = ``
  const inputContainerEl = createElement('div', 'ipnut-container')

  applyClassName(quizSectionEl, elClassName)

  new Text({
    targetEl: quizSectionEl,
    initialState: {
      elClassName: 'section-title',
      elType: 'div',
      content: title,
    },
  })

  for (let i = 0; i < numberOfInput; i++) {
    const quizInputEl = new QuizInput({
      targetEl: inputContainerEl,
      initialState: {
        iconUrl: inputIconUrl,
        elPlaceholder: inputPlaceholder,
        id: i,
        btnClassName: `quiz-btn`,
      },
      onSubmit: (id) => {
        this.setState({
          ...this.state,
          answerNum: id,
        })
      },
    })

    quizInputArray.push(quizInputEl)
  }

  this.render = () => {
    const { answerNum } = this.state

    quizInputArray?.forEach((item, idx) => {
      const isSelected = answerNum == idx ? 'quiz-btn selected' : 'quiz-btn'

      item.setState({
        ...item.state,
        btnClassName: isSelected,
      })
    })
  }

  quizSectionEl.append(inputContainerEl)
  targetEl.append(quizSectionEl)
}

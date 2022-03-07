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

  this.render = () => {
    const {
      title,
      numberOfInput,
      inputIconUrl,
      inputPlaceholder,
      elClassName,
    } = this.state

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
      new QuizInput({
        targetEl: inputContainerEl,
        initialState: {
          iconUrl: inputIconUrl,
          elPlaceholder: inputPlaceholder,
        },
      })
    }

    quizSectionEl.append(inputContainerEl)
  }

  this.render()
  targetEl.append(quizSectionEl)
}

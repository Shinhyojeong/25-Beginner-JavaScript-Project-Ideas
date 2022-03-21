import { Text, Divider } from '@base'
import { QuizInput } from './index'
import { createElement, applyClassName } from '@utils/handleElement'

export default function QuizSection({
  targetEl,
  initialState,
  submitQuizItemSheet,
}) {
  const quizSectionEl = createElement('div')

  const sectionInitialState = {
    ...initialState,
    quizItemSheet: {
      itemList: new Array(initialState.numberOfInput).fill(null),
      answerNum: null,
    },
  }

  this.state = sectionInitialState

  this.setState = (nextState) => {
    this.state = nextState
  }

  this.reset = () => {
    this.state = sectionInitialState
  }

  const { title, numberOfInput, inputIconUrl, elClassName, selectable } =
    this.state

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

  new Divider({
    targetEl: quizSectionEl,
    initialState: {},
  })

  for (let i = 0; i < numberOfInput; i++) {
    new QuizInput({
      targetEl: inputContainerEl,
      initialState: {
        iconUrl: inputIconUrl,
        elPlaceholder: `${title}...`,
        id: i,
        btnClassName: `quiz-btn`,
        selectable,
      },
      onClick: (answerNum) => {
        const { quizItemSheet } = this.state

        if (!selectable) {
          return
        }

        this.setState({
          ...this.state,
          quizItemSheet: {
            ...quizItemSheet,
            answerNum,
          },
        })

        this.render()
        submitQuizItemSheet(this.state.quizItemSheet)
      },
      onKeyUp: (value, id) => {
        const { quizItemSheet } = this.state
        const itemList = [...quizItemSheet.itemList]
        itemList.splice(id, 1, value)

        this.setState({
          ...this.state,
          quizItemSheet: {
            ...quizItemSheet,
            itemList: itemList,
          },
        })

        submitQuizItemSheet(this.state.quizItemSheet)
      },
    })
  }

  this.render = () => {
    const { quizItemSheet, selectable } = this.state
    const { answerNum } = quizItemSheet

    if (!selectable) {
      return
    }

    const quizInputArray = document.querySelectorAll(`.${elClassName} button`)

    quizInputArray?.forEach((item, idx) => {
      const isSelected = answerNum == idx ? 'quiz-btn selected' : 'quiz-btn'

      applyClassName(item, isSelected)
    })
  }

  quizSectionEl.append(inputContainerEl)
  targetEl.append(quizSectionEl)
}

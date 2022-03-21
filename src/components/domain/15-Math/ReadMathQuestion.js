import { Text } from '@base'
import { processQuestion } from '@utils/quesiton'

export default function ReadMathQuestion({ targetEl, initialState }) {
  const readMathQuestionEl = document.createElement('div')
  readMathQuestionEl.className = 'math-question-container'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    readMathQuestionEl.innerHTML = ``

    const { firstNum, secondNum, operator } = this.state
    const questionData = processQuestion(firstNum, secondNum, operator)

    questionData?.map((item) => {
      new Text({
        targetEl: readMathQuestionEl,
        initialState: {
          containerType: 'span',
          className: item.className,
          content: item.content,
        },
      })
    })
  }

  this.render()
  targetEl.append(readMathQuestionEl)
}

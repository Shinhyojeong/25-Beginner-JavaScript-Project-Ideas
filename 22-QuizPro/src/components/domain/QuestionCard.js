import { createElement } from '../../utils/createElement.js'
import { Text, Radio, Divider } from '../base/index.js'

export default function QuestionCard({ targetEl, initialState }) {
  const questionCardEl = createElement('div', 'question-card')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { questionNumber, question, answerList, correctAnswerNumber } =
      this.state
    questionCardEl.innerHTML = ``

    new Text({
      targetEl: questionCardEl,
      initialState: {
        elType: 'span',
        elClassName: 'question-title',
        content: `Question ${questionNumber}`,
      },
    })

    new Divider({
      targetEl: questionCardEl,
      initialState: {
        dividerType: 'horizontal',
        marginSize: '10px',
        elClassName: 'qustion-divider',
      },
    })

    new Text({
      targetEl: questionCardEl,
      initialState: {
        elType: 'span',
        elClassName: 'question',
        content: question,
      },
    })

    new Radio({
      targetEl: questionCardEl,
      initialstate: {
        name: 'answer',
        elClassName: 'question-answer',
        selectList: answerList,
      },
    })
  }

  this.render()
  targetEl.append(questionCardEl)
}

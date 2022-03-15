import { Text, Radio, Divider, Button } from '../base/index.js'
import { createElement } from '../../utils/createElement.js'
import { processingAnswerList } from '../../utils/handleQuizData.js'

export default function QuestionCard({ targetEl, initialState, onSubmit }) {
  const questionCardEl = createElement('div', 'question-card')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
  }

  const { quizNum, quizInfo, addMore } = this.state
  const { question, answerList, answerNum } = quizInfo
  const QuizCardName = `Question${quizNum}`

  new Text({
    targetEl: questionCardEl,
    initialState: {
      elType: 'span',
      elClassName: 'question-title',
      content: QuizCardName,
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
      name: QuizCardName,
      elClassName: 'question-answer',
      selectList: processingAnswerList(answerList),
    },
    onSelect: () => {},
  })

  !addMore &&
    new Button({
      targetEl: questionCardEl,
      initialState: {
        elClassName: 'submit-btn',
        content: 'Submit',
      },
      onClick: () => {
        // pushRadioValue()
        onSubmit()
      },
    })

  targetEl.append(questionCardEl)
}

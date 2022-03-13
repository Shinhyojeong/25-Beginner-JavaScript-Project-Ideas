import { Text, Radio, Divider } from '../base/index.js'
import { createElement } from '../../utils/createElement.js'
import { processingAnswerList } from '../../utils/handleQuizData.js'

export default function QuestionCard({ targetEl, initialState }) {
  const questionCardEl = createElement('div', 'question-card')

  this.state = initialState

  const { quizNum, quizInfo } = this.state
  const { question, answerList, answerNum } = quizInfo

  new Text({
    targetEl: questionCardEl,
    initialState: {
      elType: 'span',
      elClassName: 'question-title',
      content: `Question ${quizNum}`,
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
      selectList: processingAnswerList(answerList),
    },
  })

  console.log(processingAnswerList(answerList))
  targetEl.append(questionCardEl)
}

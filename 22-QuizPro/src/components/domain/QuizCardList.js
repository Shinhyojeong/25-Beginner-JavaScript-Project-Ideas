import { createElement } from '../../utils/createElement.js'
import { QuizCard } from './index.js'
import { optimization } from '../../utils/optimization.js'

export default function QuestionCardList({ targetEl, initialState, onSubmit }) {
  const cardListEl = createElement()

  this.state = initialState

  this.setState = (nextState) => {
    if (optimization(this.state, nextState)) {
      return
    }

    this.state = nextState
    this.render()
  }

  this.reset = () => {
    cardListEl.innerHTML = ``
  }

  this.render = () => {
    const { quizList, addMore } = this.state
    const addQuizLength = quizList.length
    const addQuiz = quizList[addQuizLength - 1]

    new QuizCard({
      targetEl: cardListEl,
      initialState: {
        quizNum: addQuizLength,
        quizInfo: addQuiz,
        addMore: addMore,
      },
      onSubmit: () => {
        onSubmit()
      },
    })
  }

  targetEl.append(cardListEl)
}

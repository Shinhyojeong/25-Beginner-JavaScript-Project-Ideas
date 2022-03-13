import { createElement } from '../../utils/createElement.js'
import { QuizCard } from './index.js'

export default function QuestionCardList({ targetEl, initialState }) {
  const cardListEl = createElement()

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.reset = () => {
    cardListEl.innerHTML = ``
  }

  const { quizList } = this.state

  quizList?.forEach((quiz, idx) => {
    new QuizCard({
      targetEl: cardListEl,
      initialState: {
        quizNum: idx,
        quizInfo: quiz,
      },
    })
  })

  this.render = () => {
    const quizList = this.state
    const addQuizLength = quizList.length
    const addQuiz = quizList[addQuizLength - 1]

    new QuizCard({
      targetEl: cardListEl,
      initialState: {
        quizNum: addQuizLength,
        quizInfo: addQuiz,
      },
    })
  }

  targetEl.append(cardListEl)
}

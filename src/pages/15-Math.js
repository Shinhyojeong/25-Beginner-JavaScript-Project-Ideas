import { Header, AnswerCardList, ReadMathQuestion } from '@domain/15-Math'
import {
  derivingCorrectAnswer,
  randomAnswerArray,
  randomState,
} from '@utils/makeRandomNum.js'
import { operaotrInfo } from '@data/operatorInfo'

export default function App({ targetEl }) {
  const initialState = derivingCorrectAnswer('+')

  this.state = randomState('+')

  this.setState = (nextState) => {
    this.state = nextState
    readMathQuestion.setState({
      ...this.state,
      firstNum: this.state.firstNum,
      secondNum: this.state.secondNum,
      correctAnswer: this.state.correctAnswer,
    })
    answerCardList.setState(this.state.answerList)
  }

  new Header({
    targetEl,
    initialState: operaotrInfo,
    onClick: (value) => {
      this.setState({
        ...this.state,
        ...randomState(value),
      })
    },
  })

  const readMathQuestion = new ReadMathQuestion({
    targetEl,
    initialState: {
      firstNum: this.state.firstNum,
      secondNum: this.state.secondNum,
      operator: this.state.operator,
    },
  })

  const answerCardList = new AnswerCardList({
    targetEl,
    initialState: this.state.answerList,
    handleCheckAnswer: (value) => {
      const { correctAnswer, operator } = this.state

      if (correctAnswer == value) {
        this.setState({
          ...this.state,
          ...randomState(operator),
        })
      }
    },
  })
}

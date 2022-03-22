import { Header, AnswerCardList, ReadMathQuestion } from '@domain/15-Math'
import { derivingCorrectAnswer, randomState } from '@utils/makeRandomNum.js'
import { createElement } from '@utils/handleElement'
import { operaotrInfo } from '@data/dummy/operatorInfo'

export default function Math({ targetEl }) {
  const mathEl = createElement()

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
    targetEl: mathEl,
    initialState: operaotrInfo,
    onClick: (value) => {
      this.setState({
        ...this.state,
        ...randomState(value),
      })
    },
  })

  const readMathQuestion = new ReadMathQuestion({
    targetEl: mathEl,
    initialState: {
      firstNum: this.state.firstNum,
      secondNum: this.state.secondNum,
      operator: this.state.operator,
    },
  })

  const answerCardList = new AnswerCardList({
    targetEl: mathEl,
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

  targetEl.append(mathEl)
}

import {
  Header,
  QuizCardList,
  CreateQuiz,
  ResultCard,
} from './components/domain/index.js'
import { checkResult } from './utils/handleQuizData.js'

export default function App({ targetEl }) {
  const initialState = {
    quizList: [],
    addMore: true,
    resultList: [],
  }

  this.state = initialState

  this.setState = (nextState) => {
    const { quizList, addMore, resultList } = nextState

    this.state = nextState
    quizCardList.setState({
      quizList: quizList,
      addMore: addMore,
    })
    resultCard.setState({
      ...resultCard.state,
      resultList: resultList,
    })
  }

  this.reset = () => {
    this.state = initialState
    quizCardList.reset()
  }

  new Header({
    targetEl,
  })

  new CreateQuiz({
    targetEl,
    initialState: {
      numberOfInput: 4,
      title: 'Question',
      elClassName: 'qeuestion',
    },
    submitQuizSheet: (quiz, canAdd) => {
      const { addMore } = this.state
      if (!addMore) {
        return
      }

      this.setState({
        ...this.state,
        quizList: [...this.state.quizList, quiz],
        addMore: canAdd,
      })
    },
    deleteAllSheet: () => {
      this.reset()
    },
  })

  const quizCardList = new QuizCardList({
    targetEl,
    initialState: {
      quizList: this.state.quizList,
      addMore: this.state.addMore,
    },
    onSubmit: () => {
      const updateResultList = checkResult(this.state.quizList)

      this.setState({
        ...this.state,
        resultList: updateResultList,
      })
    },
  })

  const resultCard = new ResultCard({
    targetEl,
    initialState: {
      resultList: this.state.resultList,
      elClassName: 'result-card',
    },
  })
}

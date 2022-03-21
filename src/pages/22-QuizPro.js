import {
  Header,
  QuizCardList,
  CreateQuiz,
  ResultCard,
} from '@domain/22-QuizPro'
import { checkResult } from '@utils/handleQuizData'

export default function App({ targetEl }) {
  const initialState = {
    quizList: [],
    addMore: true,
    resultList: [],
    isSubmit: false,
  }

  this.state = initialState

  this.setState = (nextState) => {
    const { quizList, addMore, resultList, isSubmit } = nextState

    this.state = nextState

    quizCardList.setState({
      quizList,
      addMore,
    })

    resultCard.setState({
      ...resultCard.state,
      resultList,
      isSubmit,
    })
  }

  this.reset = () => {
    this.state = initialState
    quizCardList.reset()
    resultCard.reset()
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
      isRetake: false,
    },
    onSubmit: () => {
      const updateResultList = checkResult(this.state.quizList)

      this.setState({
        ...this.state,
        resultList: updateResultList,
        isSubmit: true,
      })
    },
  })

  const resultCard = new ResultCard({
    targetEl,
    initialState: {
      resultList: this.state.resultList,
      elClassName: 'result-card',
      isSubmit: this.state.isSubmit,
    },
  })
}

import { Header, QuizCardList, CreateQuiz } from './components/domain/index.js'

export default function App({ targetEl }) {
  const initialState = {
    quizList: [],
    addMore: true,
  }

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    quizCardList.setState(this.state.quizList)
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
    initialState: this.state.quizList,
  })
}

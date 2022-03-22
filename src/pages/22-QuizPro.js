import {
  Header,
  QuizCardList,
  CreateQuiz,
  ResultCard,
} from '@domain/22-QuizPro'
import { createElement } from '@utils/handleElement'
import { checkResult } from '@utils/handleQuizData'

export default function QuizPro({ targetEl }) {
  const quizProEl = createElement()

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
    targetEl: quizProEl,
  })

  new CreateQuiz({
    targetEl: quizProEl,
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
    targetEl: quizProEl,
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
    targetEl: quizProEl,
    initialState: {
      resultList: this.state.resultList,
      elClassName: 'result-card',
      isSubmit: this.state.isSubmit,
    },
  })

  targetEl.append(quizProEl)
}

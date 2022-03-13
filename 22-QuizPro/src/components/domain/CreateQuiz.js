import { createElement } from '../../utils/createElement.js'
import { Button, Divider } from '../base/index.js'
import { QuizSection } from './index.js'
import { addQuizData } from '../../utils/handleQuizData.js'

export default function CreateQuiz({
  targetEl,
  submitQuizSheet,
  deleteAllSheet,
}) {
  const createQuizEl = createElement('div', 'create-quiz')
  const btnContainer = createElement('create-quiz-btn')

  const initialState = {
    question: '',
    answerList: [],
    answerNum: null,
  }

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
  }

  this.reset = () => {
    this.state = initialState
    questionSection.reset()
    answerSection.reset()
  }

  new Text({
    targetEl: createQuizEl,
    initialState: {
      content: 'Create Quiz',
    },
  })

  const questionSection = new QuizSection({
    targetEl: createQuizEl,
    initialState: {
      title: 'Question',
      numberOfInput: 1,
      elClassName: 'section-question',
      inputIconUrl: './src/assets/icon/help_circle.svg',
      selectable: false,
    },
    submitQuizItemSheet: (questionSheet) => {
      const { itemList } = questionSheet
      const [question] = itemList

      this.setState({
        ...this.state,
        question,
      })
    },
  })

  const answerSection = new QuizSection({
    targetEl: createQuizEl,
    initialState: {
      title: 'Answer',
      numberOfInput: 4,
      elClassName: 'section-answer',
      inputIconUrl: './src/assets/icon/check_circle.svg',
      selectable: true,
    },
    submitQuizItemSheet: (answerSheet) => {
      const { itemList, answerNum } = answerSheet

      this.setState({
        ...this.state,
        answerList: itemList,
        answerNum,
      })
    },
  })

  new Button({
    targetEl: btnContainer,
    initialState: {
      elClassName: 'add-quiz another',
      content: 'Add Another',
    },
    onClick: () => {
      addQuizData.apply(this)
      submitQuizSheet(this.state, true)
    },
  })

  new Button({
    targetEl: btnContainer,
    initialState: {
      elClassName: 'add-quiz one',
      content: 'Add/Take Quiz',
    },
    onClick: () => {
      addQuizData.apply(this)
      submitQuizSheet(this.state, false)
    },
  })

  createQuizEl.append(btnContainer)

  new Divider({
    targetEl: createQuizEl,
    initialState: {},
  })

  new Button({
    targetEl: createQuizEl,
    initialState: {
      elClassName: 'delete-quiz',
      content: 'Delete Quiz',
    },
    onClick: () => {
      deleteAllSheet()
    },
  })

  targetEl.append(createQuizEl)
}

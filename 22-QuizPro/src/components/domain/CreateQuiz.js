import { applyClassName, createElement } from '../../utils/createElement.js'
import { QuizSection } from './index.js'

export default function CreateQuiz({ targetEl, initialState }) {
  const createQuizEl = createElement('div')

  this.state = initialState

  this.setState = (nextState) => {
    this.state.nextState
    this.render()
  }

  const { numberOfInput, title, elClassName } = this.state

  applyClassName(createQuizEl, elClassName)

  new QuizSection({
    targetEl: createQuizEl,
    initialState: {
      title,
      numberOfInput: numberOfInput,
      elClassName: 'section-question',
      inputIconUrl: '',
      inputPlaceholder: `${title}`,
    },
    onSubmit: (e) => {
      e.targetEl
    },
  })

  this.render = () => {}

  this.render()
  targetEl.append(createQuizEl)
}

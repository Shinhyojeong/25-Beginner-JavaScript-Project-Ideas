import { createElement } from '../../utils/createElement.js'
import { Divider, Text, Button } from '../base/index.js'
import {
  processingResultText,
  checkAllCorrect,
} from '../../utils/handleQuizData.js'
import { reTake } from '../../utils/customEvent.js'

export default function ResultCard({ targetEl, initialState }) {
  const resultCardEl = createElement('div', initialState.elClassName)
  const resultContentEl = createElement('div', 'result-content')
  resultCardEl.style.display = 'none'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.reset = () => {
    this.state = initialState
    resultCardEl.style.display = 'none'
  }

  new Text({
    targetEl: resultCardEl,
    initialState: {
      content: 'Results',
    },
  })

  new Divider({
    targetEl: resultCardEl,
    initialState: {},
  })

  this.render = () => {
    const { resultList, isSubmit } = this.state
    const isAllCorrect = checkAllCorrect(resultList)

    if (!isSubmit) {
      return
    }

    resultCardEl.style.display = 'block'
    resultContentEl.innerHTML = ``

    resultList?.forEach((item) => {
      new Text({
        targetEl: resultContentEl,
        initialState: {
          content: processingResultText(item),
        },
      })
    })

    !isAllCorrect &&
      new Button({
        targetEl: resultContentEl,
        initialState: {
          content: 'Retake',
          elClassName: 'retake-btn',
        },
        onClick: () => {
          this.reset()
          reTake()
        },
      })
  }

  resultCardEl.append(resultContentEl)
  targetEl.append(resultCardEl)
}

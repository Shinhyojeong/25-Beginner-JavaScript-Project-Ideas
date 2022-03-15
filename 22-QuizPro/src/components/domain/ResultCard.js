import { createElement } from '../../utils/createElement.js'
import { Divider, Text } from '../base/index.js'
import { processingResultText } from '../../utils/handleQuizData.js'

export default function ResultCard({ targetEl, initialState }) {
  const resultCardEl = createElement('div', initialState.elClassName)
  const resultContentEl = createElement('div', 'result-content')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
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
    const { resultList } = this.state

    resultCardEl.style.display = 'block'
    resultContentEl.innerHTML = ``

    resultList?.forEach((item) => {
      new Text({
        targetEl: resultCardEl,
        initialState: {
          content: processingResultText(item),
        },
      })
    })
  }

  resultCardEl.append(resultContentEl)
  targetEl.append(resultCardEl)
}

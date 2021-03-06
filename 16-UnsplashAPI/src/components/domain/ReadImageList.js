import Image from '../atomic/Image.js'
import { createElement } from '../../utils/createElement.js'

export default function ReadImageList({ targetEl, initialState, onSubmit }) {
  this.state = initialState

  const resultContainerEl = createElement('div', 'result-container')

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = async () => {
    resultContainerEl.innerHTML = ''

    this.state?.forEach((imgUrl) => {
      new Image({
        targetEl: resultContainerEl,
        initialState: {
          imgUrl,
          elClassName: 'result-img',
        },
      })
    })
  }

  targetEl.append(resultContainerEl)
}

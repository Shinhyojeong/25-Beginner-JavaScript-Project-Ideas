import { createElement } from '../../utils/createElement.js'
import Text from '../atomic/Text.js'
import Image from '../atomic/Image.js'

export default function Card({ targetEl, initialState }) {
  const cardContainerEl = createElement('div', 'card-container')

  this.state = initialState

  const { imgUrl, title, submitUrl } = this.state

  new Image({
    targetEl: cardContainerEl,
    initialState: {
      elClassName: 'card-img',
      imgUrl,
    },
  })

  new Text({
    targetEl: cardContainerEl,
    initialState: {
      elType: 'div',
      elClassName: 'card-hover-text',
      content: 'Go To Live  ↗',
    },
  })

  new Text({
    targetEl: cardContainerEl,
    initialState: {
      elType: 'div',
      elClassName: 'card-title',
      content: title,
    },
  })

  targetEl.append(cardContainerEl)

  cardContainerEl.addEventListener('click', () => {
    location.href = submitUrl
  })
}

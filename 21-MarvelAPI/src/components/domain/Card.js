import Image from '../atomic/Image.js'
import TextBox from './TextBox.js'
import { applyClassName, createElement } from '../../utils/createElement.js'

export default function Card({ targetEl, initialState }) {
  const cardEl = createElement('div')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, cardInfo } = this.state
    const { title, content, imgUrl, imgAlt } = cardInfo

    applyClassName(cardEl, elClassName)
    cardEl.innerHTML = ``

    new Image({
      targetEl: cardEl,
      initialState: {
        elClassName: `card-img`,
        imgUrl,
        imgAlt,
      },
    })

    new TextBox({
      targetEl: cardEl,
      initialState: {
        elClassName: `card-text`,
        title,
        content,
      },
    })
  }

  this.render()
  targetEl.append(cardEl)
}

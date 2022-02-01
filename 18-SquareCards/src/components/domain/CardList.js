import { createElement } from '../../utils/createElement.js'
import Card from './Card.js'

export default function CardList({ targetEl, initialState }) {
  const cardListContainerEl = createElement('div', 'card-list-container')

  this.state = initialState

  this.state?.forEach((card) => {
    const { imgUrl, title, content, submitUrl } = card

    new Card({
      targetEl: cardListContainerEl,
      initialState: { imgUrl, title, content, submitUrl },
    })
  })

  targetEl.append(cardListContainerEl)
}

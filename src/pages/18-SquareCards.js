import { Text } from '@base'
import { CardList } from '@domain/18-SquareCards'
import { CARD_LIST_DATA } from '@data/CardList.js'
import { createElement } from '@utils/handleElement'
import '@styles/18-SquareCards.css'

export default function SquareCards({ targetEl }) {
  const containerEl = createElement('div', 'container')

  this.state = {
    cardList: CARD_LIST_DATA,
  }

  new Text({
    targetEl: containerEl,
    initialState: {
      elType: 'div',
      elClassName: 'title',
      content: '25 Vanilla JavaScript Project',
    },
  })

  new CardList({
    targetEl: containerEl,
    initialState: this.state.cardList,
  })

  targetEl.append(containerEl)
}

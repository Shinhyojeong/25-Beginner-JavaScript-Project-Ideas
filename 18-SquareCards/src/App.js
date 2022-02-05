import CardList from './components/domain/CardList.js'
import { CARD_LIST_DATA } from './data/CardList.js'
import { createElement } from './utils/createElement.js'
import Text from './components/atomic/Text.js'

export default function App({ targetEl }) {
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

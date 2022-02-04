import Card from './components/domain/Card.js'
import CardList from './components/domain/CardList.js'
import { DUMMY_CARD_LIST } from './data/dummy/CardList.js'

export default function App({ targetEl }) {
  this.state = {
    cardList: DUMMY_CARD_LIST,
  }

  new CardList({
    targetEl,
    initialState: this.state.cardList,
  })
}

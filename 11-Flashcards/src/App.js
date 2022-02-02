import Header from './components/domain/Header.js'
import AddCard from './components/domain/AddCard.js'
import ReadCardList from './components/domain/ReadCardList.js'
import { setItem, getItem, removeItem } from './utils/storage.js'

const LOCALSTORAGE_KEY = 'card-list'

export default function App({ targetEl }) {
  const containerEl = document.createElement('div')
  containerEl.className = 'container'

  this.state = {
    visibleAddCard: false,
    cardList: getItem(LOCALSTORAGE_KEY, []),
  }

  this.setState = (nextState) => {
    this.state = nextState
    addCard.setState(this.state.visibleAddCard)
    readCardList.setState(this.state.cardList)
  }

  new Header({
    targetEl: containerEl,
    onChange: () => {
      this.setState({
        ...this.state,
        visibleAddCard: true,
      })
    },
    onRemove: () => {
      this.setState({
        ...this.state,
        cardList: [],
      })

      removeItem(LOCALSTORAGE_KEY)
    },
  })

  const addCard = new AddCard({
    targetEl: containerEl,
    initialState: this.state.visibleAddCard,
    onChange: () => {
      this.setState({
        ...this.state,
        visibleAddCard: false,
      })
    },
    onSubmit: (cardContent) => {
      this.setState({
        ...this.state,
        cardList: [...this.state.cardList, cardContent],
      })

      setItem(LOCALSTORAGE_KEY, this.state.cardList)
    },
  })

  const readCardList = new ReadCardList({
    targetEl: containerEl,
    initialState: this.state.cardList,
    onChange: (cardList) => {
      this.setState({
        ...this.state,
        cardList,
      })

      setItem(LOCALSTORAGE_KEY, this.state.cardList)
    },
  })

  targetEl.append(containerEl)
}

import { Header, AddCard, ReadCardList } from '@domain/11-Flashcards'
import { setItem, getItem, removeItem } from '@utils/storage.js'
import { createElement } from '@utils/handleElement'
import '@style/11-Flashcard.css'

const LOCALSTORAGE_KEY = 'card-list'

export default function Flashcard({ targetEl }) {
  const flashcardEl = createElement()
  const containerEl = createElement('div', 'container')

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

  flashcardEl.append(containerEl)
  targetEl.append(flashcardEl)
}

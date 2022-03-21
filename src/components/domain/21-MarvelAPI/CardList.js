import Card from './Card'
import { applyClassName, createElement } from '@utils/handleElement'

export default function CardList({ targetEl, initialState }) {
  const cardListEl = createElement('div')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, itemClassName, cardList } = this.state

    cardListEl.innerHTML = ``
    applyClassName(cardListEl, elClassName)

    cardList?.forEach((cardInfo) => {
      new Card({
        targetEl: cardListEl,
        initialState: {
          elClassName: itemClassName,
          cardInfo,
        },
      })
    })
  }

  this.render()
  targetEl.append(cardListEl)
}

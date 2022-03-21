import FlashCard from './FlashCard'

export default function ReadCardList({ targetEl, initialState, onChange }) {
  const readCardList = document.createElement('div')
  readCardList.className = 'card-list-container'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    readCardList.innerHTML = ``

    this.state?.forEach((item, idx) => {
      new FlashCard({
        targetEl: readCardList,
        initialState: item,
        onChange: (cardInfo) => {
          const newCardList = this.state.slice()
          newCardList.splice(idx, 1, cardInfo)
          onChange(newCardList)
        },
      })
    })
  }

  this.render()
  targetEl.append(readCardList)
}

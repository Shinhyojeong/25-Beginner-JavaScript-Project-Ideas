import FlashCard from './FlashCard.js'

export default function ReadCardList({ targetEl, initialState }) {
  const readCardList = document.createElement('div')
  readCardList.className = 'card-list-container'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    readCardList.innerHTML = ``

    this.state?.map((item) => {
      new FlashCard({
        targetEl: readCardList,
        initialState: item,
      })
    })
  }

  this.render()
  targetEl.append(readCardList)
}

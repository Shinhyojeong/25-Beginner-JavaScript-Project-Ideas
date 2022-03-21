import { AddList, ReadList, RemoveList } from '@domain/09-GroceryList'
import '@styles/09-GroceryList.css'

export default function GroceryList({ targetEl }) {
  const containerEl = document.createElement('div')
  containerEl.className = 'container'

  this.state = {
    groceryList: [],
  }

  this.setState = (nextState) => {
    this.state = nextState
    readList.setState(nextState)
  }

  new AddList({
    targetEl: containerEl,
    onSubmit: (value) => {
      this.setState({
        groceryList: [value, ...this.state.groceryList],
      })
    },
  })

  new RemoveList({
    targetEl: containerEl,
    onClick: () => {
      this.setState({
        groceryList: [],
      })
    },
  })

  const readList = new ReadList({
    targetEl: containerEl,
    initialState: this.state.groceryList,
  })

  targetEl.append(containerEl)
}

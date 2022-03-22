import { AddList, ReadList, RemoveList } from '@domain/09-GroceryList'
import { createElement } from '@utils/handleElement'
import '@style/09-GroceryList.css'

export default function GroceryList({ targetEl }) {
  const groceryListEl = createElement()
  const containerEl = createElement('div', 'container')

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

  groceryListEl.append(containerEl)
  targetEl.append(groceryListEl)
}

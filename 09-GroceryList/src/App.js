import AddList from './components/AddList.js'
import ReadList from './components/ReadList.js'
import RemoveList from './components/RemoveList.js'

export default function App({ targetEl }) {
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

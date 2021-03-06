import ReadNumber from './components/ReadNumber.js'
import CountingBtns from './components/CountingBtns.js'

export default function App({ targetEl }) {
  const containerEl = document.createElement('div')
  containerEl.className = 'container'
  targetEl.append(containerEl)

  this.state = {
    counter: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    readNumber.setState(nextState)
  }

  const readNumber = new ReadNumber({
    targetEl: containerEl,
    initialState: this.state.counter,
  })

  new CountingBtns({
    targetEl: containerEl,
    onCount: (btnType) => {
      const { counter } = this.state

      if (btnType === 'increase') {
        this.setState({
          counter: counter + 1,
        })
      } else if (btnType === 'decrease') {
        this.setState({
          counter: counter - 1,
        })
      }
    },
  })
}

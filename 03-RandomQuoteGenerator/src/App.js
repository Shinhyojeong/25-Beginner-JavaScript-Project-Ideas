import Button from './components/Button.js'
import QuoteBox from './components/QuoteBox.js'

export default function App({ targetEl }) {
  this.state = {
    quote: null,
  }

  this.setState = (nextState) => {
    this.state = nextState
    quoteBox.setState(nextState)
  }

  const quoteBox = new QuoteBox({
    targetEl,
    initialState: this.state,
  })

  new Button({
    targetEl,
    onClick: (quote) => {
      this.setState({
        quote,
      })
    },
  })
}

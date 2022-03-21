import { Button } from '@base'
import { QuoteBox } from '@domain/03-RandomQuoteGenerator'
import '@styles/03-RandomQuoteGenerator.css'

export default function RandomQuoteGenerator({ targetEl }) {
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

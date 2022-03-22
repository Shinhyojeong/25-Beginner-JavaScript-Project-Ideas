import { Button } from '@base'
import { QuoteBox } from '@domain/03-RandomQuoteGenerator'
import { createElement } from '@utils/handleElement'
import '@style/03-RandomQuoteGenerator.css'

export default function RandomQuoteGenerator({ targetEl }) {
  const randomQuoteGeneratorEl = createElement()

  this.state = {
    quote: null,
  }

  this.setState = (nextState) => {
    this.state = nextState
    quoteBox.setState(nextState)
  }

  const quoteBox = new QuoteBox({
    targetEl: randomQuoteGeneratorEl,
    initialState: this.state,
  })

  new Button({
    targetEl: randomQuoteGeneratorEl,
    onClick: (quote) => {
      this.setState({
        quote,
      })
    },
  })

  targetEl.append(randomQuoteGeneratorEl)
}

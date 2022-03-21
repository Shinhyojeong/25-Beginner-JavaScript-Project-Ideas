import { TypingQuote } from '@domain/17-Typewriter'
import { request } from '@api/api.js'

export default function App({ targetEl }) {
  this.state = {
    quote:
      'Always be a first-rate version of yourself, instead of a second-rate version of somebody else',
  }

  this.setState = (nextState) => {
    this.state = nextState
    typingQuote.setState(this.state)
  }

  const typingQuote = new TypingQuote({
    targetEl,
    initialState: this.state,
    nextQuote: async () => {
      const data = await request()

      this.setState({
        ...this.state,
        quote: data.content,
      })
    },
  })
}

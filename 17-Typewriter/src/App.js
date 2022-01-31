import TypingQuote from './components/TypingQuote.js'
import { request } from './api/api.js'
import { fetchQuote } from './utils/fetchQuote.js'

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
      const data = await fetchQuote()
      console.log(data.content)

      this.setState({
        ...this.state,
        quote: data.content,
      })
    },
  })

  fetchInitialState()
}

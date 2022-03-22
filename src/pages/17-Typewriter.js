import { TypingQuote } from '@domain/17-Typewriter'
import { request } from '@api/api.js'
import { createElement } from '@utils/handleElement'

export default function Typewriter({ targetEl }) {
  const typeWriterEl = createElement()

  this.state = {
    quote:
      'Always be a first-rate version of yourself, instead of a second-rate version of somebody else',
  }

  this.setState = (nextState) => {
    this.state = nextState
    typingQuote.setState(this.state)
  }

  const typingQuote = new TypingQuote({
    targetEl: typeWriterEl,
    initialState: this.state,
    nextQuote: async () => {
      const data = await request()

      this.setState({
        ...this.state,
        quote: data.content,
      })
    },
  })

  targetEl.append(typeWriterEl)
}

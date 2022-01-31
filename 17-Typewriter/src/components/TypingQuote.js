import { createElement } from '../utils/createElement.js'

export default function TypingQuote({ targetEl, initialState, nextQuote }) {
  const typingContainer = createElement('div', 'typing-container')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render(0)
  }

  let typingTimer = null

  this.render = (idx) => {
    const { quote } = this.state

    if (quote.length > idx) {
      typingContainer.innerHTML += quote[idx]

      typingTimer = setTimeout((quote) => {
        this.render(idx + 1)
      }, 500)
    } else {
      typingTimer && clearTimeout(typingTimer)
      nextQuote()
      typingContainer.innerHTML = ``
    }
  }

  this.render(0)
  targetEl.append(typingContainer)
}

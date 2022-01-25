export default function QuoteBox({ targetEl, initialState }) {
  const quoteBoxEl = document.createElement('div')
  quoteBoxEl.className = 'quote-box'
  console.log(quoteBoxEl)

  this.state = {
    quote: initialState,
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { quote, author } = this.state.quote

    quoteBoxEl.innerHTML = `
                <span class="quote">
                    ${quote ? `" ${quote} "` : ''}
                </span>
                <span class="author">
                    ${author ? `- ${author}` : ''}
                </span>
        `
  }

  this.render()
  targetEl.append(quoteBoxEl)
}

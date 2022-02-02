export default function FlashCard({ targetEl, initialState, onChange }) {
  const flashCardEl = document.createElement('div')
  flashCardEl.className = 'flashcard'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { question, answer, answerReveal } = this.state

    flashCardEl.innerHTML = `
            <div class="question">
                Q. ${question}
            </div>
            <div class="answer ${answerReveal ? 'visible' : ''}">
                A. ${answer}
            </div>
        `
  }

  this.render()
  targetEl.append(flashCardEl)

  flashCardEl.addEventListener('click', () => {
    this.setState({
      ...this.state,
      answerReveal: !this.state.answerReveal,
    })

    onChange(this.state)
  })
}

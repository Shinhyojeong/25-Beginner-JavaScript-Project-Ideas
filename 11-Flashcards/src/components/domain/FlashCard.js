export default function FlashCard({ targetEl, initialState }) {
  const flashCardEl = document.createElement('div')
  flashCardEl.className = 'flashcard'

  this.state = {
    ...initialState,
    visibleAnswer: false,
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  console.log(this.state)
  this.render = () => {
    const { question, answer, visibleAnswer } = this.state

    flashCardEl.innerHTML = `
            <div class="question">
                Q. ${question}
            </div>
            <div class="answer ${visibleAnswer ? 'visible' : ''}">
                A. ${answer}
            </div>
        `
  }

  this.render()
  targetEl.append(flashCardEl)

  flashCardEl.addEventListener('click', () => {
    this.setState({
      ...this.state,
      visibleAnswer: !this.state.visibleAnswer,
    })
  })
}

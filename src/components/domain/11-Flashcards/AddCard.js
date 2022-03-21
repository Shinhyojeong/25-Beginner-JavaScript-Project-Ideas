import { Button } from '@base'

export default function AddCard({
  targetEl,
  initialState,
  onChange,
  onSubmit,
}) {
  const addCardEl = document.createElement('div')
  const btnBoxEl = document.createElement('div')

  addCardEl.className = 'add-container'
  btnBoxEl.className = 'btn-box'

  addCardEl.style.display = 'none'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    addCardEl.style.display = this.state ? 'block' : 'none'
  }

  this.render = () => {
    addCardEl.innerHTML = `
            <div class="add-title">Create Flashcard</div>
            <form>
                <div class="add-content question">
                    <label for="question">
                        <span class="add-subtitle">Question</span>
                    </label>
                    <textarea id="question"></textarea>
                </div>
                <div class="add-content answer">
                    <label for="answer">
                        <span class="add-subtitle">Answer</span>
                    </label>
                    <textarea id="answer"></textarea>
                </div>
            </form>
        `
  }

  this.render()

  new Button({
    targetEl: btnBoxEl,
    initialState: 'Save',
    onClick: () => {
      const formData = document.forms[0]
      const question = formData.elements[0]
      const answer = formData.elements[1]

      onSubmit({
        question: question.value,
        answer: answer.value,
        answerReveal: false,
      })

      question.value = ''
      answer.value = ''
    },
  })

  new Button({
    targetEl: btnBoxEl,
    initialState: 'Close',
    onClick: () => {
      onChange()
    },
  })

  addCardEl.append(btnBoxEl)
  targetEl.append(addCardEl)
}

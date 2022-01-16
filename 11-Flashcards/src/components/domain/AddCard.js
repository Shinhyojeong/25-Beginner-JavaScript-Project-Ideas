import Button from "../atomic/Button.js"

export default function AddCard({
    targetEl,
    initialState,
    onChange,
    onSubmit,
}){
    const addCardEl = document.createElement('div')
    addCardEl.className = 'add-container'
    addCardEl.style.display = 'none'

    this.state = initialState

    this.setState = nextState => {
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
        targetEl : addCardEl,
        initialState : 'Save',
        onClick: () => {
            const formData = document.forms[0]
            const question = formData.elements[0]
            const answer = formData.elements[1]

            onSubmit({
                question : question.value,
                answer : answer.value,
            })

            question.value = ''
            answer.value = ''
        }
    })

    new Button({
        targetEl : addCardEl,
        initialState : 'Close',
        onClick: () => {
            onChange()
        }
    })

    targetEl.append(addCardEl)

}
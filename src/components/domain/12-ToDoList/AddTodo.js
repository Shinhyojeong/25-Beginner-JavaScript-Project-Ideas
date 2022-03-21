import { Button } from '@base'

export default function AddTodo({ targetEl, onSubmit }) {
  const addTodoEl = document.createElement('div')
  addTodoEl.className = 'add-todo-container'

  this.render = () => {
    addTodoEl.innerHTML = `
            <input type="text" class="add-todo-input" />
        `
  }

  this.render()
  targetEl.append(addTodoEl)

  const inputEl = document.querySelector('.add-todo-input')
  const handleSubmit = (target) => {
    onSubmit(target.value)
    target.value = ''
  }

  new Button({
    targetEl: addTodoEl,
    initialState: {
      btnClassName: 'add-todo-btn',
      content: 'Submit',
    },
    onClick: (e) => {
      handleSubmit(inputEl)
    },
  })

  inputEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e.target)
    }
  })
}

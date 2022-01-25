import Todo from './Todo.js'

export default function ReadTodoList({ targetEl, initialState, onRemove }) {
  const readTodoListEl = document.createElement('ul')
  readTodoListEl.className = 'list-container'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    readTodoListEl.innerHTML = ``

    const todoList = this.state

    todoList?.map(
      (todo) =>
        new Todo({
          targetEl: readTodoListEl,
          initialState: todo,
          onRemove: (id) => {
            onRemove(id)
          },
        })
    )
  }

  targetEl.append(readTodoListEl)
}

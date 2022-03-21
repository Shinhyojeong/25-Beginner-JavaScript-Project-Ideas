import { AddTodo, ReadTodoList } from '@domain/12-ToDoList'

export default function App({ targetEl }) {
  this.state = {
    todoList: [],
    lastId: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    readTodoList.setState(this.state.todoList)
  }

  new AddTodo({
    targetEl,
    onSubmit: (todoText) => {
      const { todoList, lastId } = this.state

      const todoItem = {
        id: lastId,
        content: todoText,
      }

      this.setState({
        ...this.state,
        lastId: this.state.lastId + 1,
        todoList: [...todoList, todoItem],
      })
    },
  })

  const readTodoList = new ReadTodoList({
    targetEl,
    initialState: this.state.todoList,
    onRemove: (id) => {
      const newTodoList = this.state.todoList.filter((todo) => todo.id !== id)

      this.setState({
        ...this.state,
        todoList: newTodoList,
      })
    },
  })
}

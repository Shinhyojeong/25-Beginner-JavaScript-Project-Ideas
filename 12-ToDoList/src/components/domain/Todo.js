import Button from '../atomic/Button.js'

export default function Todo({
    targetEl,
    initialState,
    onRemove,
}){
    const todoEl = document.createElement('li')
    todoEl.className = 'todo-container'

    this.state = { ... initialState, done : false}

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const { id, content, done} = this.state

        todoEl.innerHTML = `
            <span class="todo-text" data-id=${id}>
                ${ done ? `<del>${content}</del>` : `${content}` }
            </span>
        `

        new Button({
            targetEl : todoEl,
            initialState : {
                btnClassName : 'todo-btn done',
                content : done ? 'not done' : 'done'
            },
            onClick : () => {
                this.setState({
                    ...this.state,
                    done : !done,
                })
            }
        })

        new Button({
            targetEl : todoEl,
            initialState : {
                btnClassName : 'todo-btn remove',
                content : 'remove'
            },
            onClick : () => {
                onRemove(id)
            }
        })
    }

    this.render()
    targetEl.append(todoEl)


}
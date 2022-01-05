export default function ReadMessage({
    targetEl,
    initialState = ''
}){
    const readMessageEl = document.createElement('div')
    readMessageEl.className = 'message-box_read'

    this.state = {
        message : initialState
    }

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        readMessageEl.innerHTML = `
            <span class="message_text">${this.state.message}</span>
        `
    }

    this.render()
    targetEl.append(readMessageEl)
}
import SendMessage from "./components/SendMessage.js";
import ReadMessage from "./components/ReadMessage.js";

export default function App ({
    targetEl
}){
    const containerEl = document.createElement('div')
    containerEl.className = 'container'
    containerEl.textContent = 'Pass the message'
    targetEl.append(containerEl)

    this.state = {
        message : ''
    }

    this.setState = nextState => {
        this.state = nextState
        readMessage.setState(nextState)
    }

    new SendMessage({
        targetEl : containerEl,
        onSendMessage: message => {
            this.setState({ message })
        }
    })

    const readMessage = new ReadMessage({
        targetEl : containerEl,
        initialState : this.state.message
    })
}
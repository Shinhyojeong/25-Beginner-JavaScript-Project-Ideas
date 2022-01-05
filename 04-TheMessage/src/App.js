import SendMessage from "./components/SendMessage.js";
import ReadMessage from "./components/ReadMessage.js";

export default function App ({
    targetEl
}){
    this.state = {
        message : ''
    }

    this.setState = nextState => {
        this.state = nextState
        readMessage.setState(nextState)
    }

    new SendMessage({
        targetEl,
        onSendMessage: message => {
            this.setState({ message })
        }
    })

    const readMessage = new ReadMessage({
        targetEl,
        initialState : this.state.message
    })
}
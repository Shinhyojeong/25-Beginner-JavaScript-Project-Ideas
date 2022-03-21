import { SendMessage, ReadMessage } from '@domain/04-TheMessage'
import '@styles/03-TheMessage.css'

export default function App({ targetEl }) {
  const containerEl = document.createElement('div')
  containerEl.className = 'container'
  containerEl.textContent = 'Pass the message'
  targetEl.append(containerEl)

  this.state = {
    message: '',
  }

  this.setState = (nextState) => {
    this.state = nextState
    readMessage.setState(nextState)
  }

  new SendMessage({
    targetEl: containerEl,
    onSendMessage: (message) => {
      this.setState({ message })
    },
  })

  const readMessage = new ReadMessage({
    targetEl: containerEl,
    initialState: this.state.message,
  })
}

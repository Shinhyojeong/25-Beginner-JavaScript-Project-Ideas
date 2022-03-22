import { SendMessage, ReadMessage } from '@domain/04-TheMessage'
import { createElement } from '@utils/handleElement'
import '@style/04-TheMessage.css'

export default function TheMessage({ targetEl }) {
  const theMessageEl = createElement()
  const containerEl = createElement('div', 'container')

  containerEl.textContent = 'Pass the message'

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

  theMessageEl.append(containerEl)
  targetEl.append(theMessageEl)
}

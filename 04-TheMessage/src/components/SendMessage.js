export default function SendMessage({ targetEl, onSendMessage }) {
  const sendMessageEl = document.createElement('div')
  const inputEl = document.createElement('input')
  const btnEl = document.createElement('button')

  sendMessageEl.className = 'message-box_send'
  inputEl.className = 'message_input'
  btnEl.className = 'message_btn'

  btnEl.textContent = 'Submit'

  sendMessageEl.append(inputEl, btnEl)
  targetEl.append(sendMessageEl)

  inputEl.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      onSendMessage(e.target.value)
      e.target.value = ''
    }
  })

  btnEl.addEventListener('click', (e) => {
    onSendMessage(inputEl.value)
    inputEl.value = ''
  })
}

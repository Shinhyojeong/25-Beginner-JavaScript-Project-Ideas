import { checkTime } from '@utils/processTime'

export default function ReadTimer({ targetEl, initialState, onClick }) {
  const readTimerEl = document.createElement('div')
  readTimerEl.className = 'read-timer-container'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    readTimerEl.innerHTML = `${checkTime(this.state.time)}`
  }

  this.render()
  targetEl.append(readTimerEl)

  readTimerEl.addEventListener('click', (e) => {
    onClick()
  })
}

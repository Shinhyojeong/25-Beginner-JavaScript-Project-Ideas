import { HandleTimer, ReadTimer } from '@domain/14-Timer'
import { createElement } from '@utils/handleElement'
import '@style/14-Timer.css'

export default function Timer({ targetEl }) {
  const timerEl = createElement()

  this.state = {
    startTimer: false,
    time: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    handleTimer.setState({
      ...handleTimer.state,
      startTimer: this.state.startTimer,
      time: this.state.time,
    })
    readTimer.setState({
      time: this.state.time,
    })
  }

  const handleTimer = new HandleTimer({
    initialState: {
      startTimer: this.state.startTimer,
      time: this.state.time,
    },
    onSubmit: (time) => {
      this.setState({
        ...this.state,
        time,
      })
    },
  })

  const readTimer = new ReadTimer({
    targetEl: timerEl,
    initialState: {
      time: this.state.time,
    },
    onClick: () => {
      const { startTimer, time } = this.state

      this.setState({
        ...this.state,
        startTimer: !startTimer,
        time: startTimer ? time : 0,
      })
    },
  })

  targetEl.append(timerEl)
}

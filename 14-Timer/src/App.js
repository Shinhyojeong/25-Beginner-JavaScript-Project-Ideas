import HandleTimer from './components/HandleTimer.js'
import ReadTimer from './components/ReadTimer.js'

export default function App({ targetEl }) {
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
    targetEl,
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
}

import InputInformation from './components/InputInformation.js'
import Toast from './components/Toast.js'

export default function App({ targetEl }) {
  const containerEl = document.createElement('div')
  containerEl.className = 'container'
  containerEl.innerHTML = '<span class="container-title">Tip Calculator</span>'
  targetEl.append(containerEl)

  this.state = {
    tip: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    toast.setState(nextState)
  }

  new InputInformation({
    targetEl: containerEl,
    onSubmit: (tip) => {
      this.setState({ tip })
      console.log(this.state)
    },
  })

  const toast = new Toast({
    targetEl,
    initialState: this.state.tip,
  })
}

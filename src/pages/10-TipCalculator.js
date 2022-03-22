import { InputInformation } from '@domain/10-TipCalculator'
import { Toast } from '@domain'
import { createElement } from '@utils/handleElement'
import '@style/10-TipCalculator.css'

export default function TipCalculator({ targetEl }) {
  const tipCalculatorEl = createElement()
  const containerEl = createElement('div', 'container')
  containerEl.innerHTML = '<span class="container-title">Tip Calculator</span>'

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

  tipCalculatorEl.append(containerEl)
  targetEl.append(tipCalculatorEl)
}

import CalculatorBtns from './components/CalculatorBtns.js'
import ReadCalculation from './components/ReadCalculation.js'

export default function App({ targetEl }) {
  const containerEl = document.createElement('div')
  containerEl.className = 'container'
  targetEl.append(containerEl)

  this.state = {
    calculation: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    readCalculation.setState(nextState)
  }

  const readCalculation = new ReadCalculation({
    targetEl: containerEl,
    initialState: this.state.calculation,
  })

  const calculatorBtns = new CalculatorBtns({
    targetEl: containerEl,
    onClick: (calculation, name) => {
      let nextCalculation = 0
      try {
        if (name === 'equal') {
          nextCalculation = eval(calculation.slice(0, -1))
          calculatorBtns.setState({
            calculation: 0,
            prevSelectedElName: 0,
          })
        } else {
          nextCalculation = calculation
        }
      } catch (e) {
        alert('식이 잘못됐습니다! 다시 입력해 주세요')
        calculatorBtns.setState({
          calculation: 0,
          prevSelectedElName: 0,
        })
      }

      this.setState({
        calculation: nextCalculation,
      })
    },
  })
}

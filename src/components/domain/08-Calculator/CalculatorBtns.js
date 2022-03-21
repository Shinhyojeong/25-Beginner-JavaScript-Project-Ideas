export default function ({ targetEl, onClick }) {
  const btnContainer = document.createElement('div')
  btnContainer.className = 'btn-container'

  this.state = {
    calculation: 0,
    prevSelectedElName: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
  }

  this.render = () => {
    btnContainer.innerHTML = `
            <div class="btn-box first">
                <button class="calculator-btn number" name="number" value="1">1</button>
                <button class="calculator-btn number" name="number" value="2">2</button>
                <button class="calculator-btn number" name="number" value="3">3</button>
                <button class="calculator-btn operator" name="operator" value="plus">+</button>
            </div>
            <div class="btn-box second">
                <button class="calculator-btn number" name="number" value="4">4</button>
                <button class="calculator-btn number" name="number" value="5">5</button>
                <button class="calculator-btn number" name="number" value="6">6</button>
                <button class="calculator-btn operator" name="operator" value="minus">-</button>
            </div>
            <div class="btn-box third">
                <button class="calculator-btn number" name="number" value="7">7</button>
                <button class="calculator-btn number" name="number" value="8">8</button>
                <button class="calculator-btn number" name="number" value="9">9</button>
                <button class="calculator-btn operator" name="operator" value="multiplication">*</button>
            </div>
            <div class="btn-box fourth">
                <button class="calculator-btn number" name="decimalPoint" value="decimalPoint">.</button>
                <button class="calculator-btn number" name="number" value="0">0</button>
                <button class="calculator-btn number" name="cancel" value="cancel">C</button>
                <button class="calculator-btn operator" name="operator" value="division">/</button>
            </div>
            <div class="btn-box fifth">
                <button class="calculator-btn equal" name="equal" value="equal">=</button>
            </div>
        `
  }

  this.render()
  targetEl.append(btnContainer)

  btnContainer.addEventListener('click', (e) => {
    const { name, innerText } = e.target
    if (!name) {
      return
    }

    const { calculation, prevSelectedElName } = this.state
    let selectedValue

    if (
      !(
        (name === 'equal' && prevSelectedElName === 'operator') ||
        (name === 'operator' && prevSelectedElName === 'operator') ||
        (name === 'decimalPoint' && prevSelectedElName === 'decimalPoint')
      )
    ) {
      if (name === 'cancel') {
        selectedValue = 0
      } else if (calculation === 0) {
        selectedValue = innerText
      } else {
        selectedValue = calculation + innerText
      }
    } else {
      return
    }

    this.setState({
      calculation: selectedValue,
      prevSelectedElName: name,
    })

    onClick(this.state.calculation, name)
  })
}

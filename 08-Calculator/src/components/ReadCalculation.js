export default function ReadCalculation ({
    targetEl,
    initialState
}){
    const calculationContainer = document.createElement('div')
    calculationContainer.className = 'calculation-container'

    this.state = {
        calculation: initialState
    }

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        console.log(this.state.calculation)
        calculationContainer.innerHTML = `
            <span class="calculation-text">${this.state.calculation}</span>
        `
    }

    this.render()
    targetEl.append(calculationContainer)
}
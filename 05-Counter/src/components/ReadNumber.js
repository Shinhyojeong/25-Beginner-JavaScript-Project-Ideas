export default function ReadNumber({
    targetEl,
    initialState = 0
}){
    const counterEl = document.createElement('div')
    counterEl.className = 'counter'

    this.state = {
        counter : initialState
    }

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        counterEl.innerHTML = `
            <span class="counter_text">${this.state.counter}</span>
        `
    }

    this.render()
    targetEl.append(counterEl)

}
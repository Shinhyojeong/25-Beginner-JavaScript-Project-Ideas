export default function Container({ targetEl, initialState}){

    const containerEl = document.createElement('div')
    containerEl.className = "container"

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const {startColor, endColor} = this.state

        containerEl.innerHTML = `
            <span class="container-text">
                CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT<br> HEX COLOR COMBINATION
                <br>background: linear-gradient(to right, );
            </span>
        `
        containerEl.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`
    }

    this.render()
    targetEl.appendChild(containerEl)
}
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
            <div class="container-text">
                <h1>
                    CLICK THE BUTTON BELLOW TO GENERATE A RANDOM GRADIENT<br> HEX COLOR COMBINATION
                </h1>
                <h2 class="bottom">
                    background: linear-gradient(to right, ${startColor}, ${endColor});
                </h2>
            </div>
        `
        containerEl.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`
    }

    this.render()
    targetEl.appendChild(containerEl)
}
export default function TextArea({
    targetEl,
    initialState
}){

    this.state = initialState

    const textAreaEl = document.createElement('div')
    textAreaEl.className = this.state.className

    this.setState = nextState => {
        this.state = nextState
    }

    this.render = () => {
        textAreaEl.innerHTML = `
            <textarea placeholder="${this.state.placeholder}"/>
        `
    }

    this.render()
    targetEl.append(textAreaEl)
}
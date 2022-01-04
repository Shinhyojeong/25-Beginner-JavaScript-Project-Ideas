export default function Container({
    targetEl,
    initialState
}){
    const containerEl = document.createElement('div')
    containerEl.className = 'container'


    this.state = {
        quote : initialState
    }

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const {quote, author } = this.state.quote

        containerEl.innerHTML = `
            <div class="box">
                <span class="box_qoute">
                    ${quote ? quote : ''}
                </span>
                <span class="box_author">
                    ${author ? author : ''}
                </span>
            </div>
        `
    }

    this.render()
    targetEl.appendChild(containerEl)

}
import Button from './Button.js'

export default function Modal({
    targetEl,
    initialState,
    onClose,
}){
    this.state = initialState

    const modalDIMEl = document.createElement('div')
    const modalContainerEl = document.createElement('div')
    modalDIMEl.className = this.state.className
    modalContainerEl.className = 'modal-container'
    modalDIMEl.style.display = 'none'

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        modalDIMEl.style.display = this.state.visible ? 'block' : 'none'
    }

    modalContainerEl.innerHTML = `${this.state.content}`

    new Button({
        targetEl : modalContainerEl,
        initialState: {
            btnClassName : 'modal-close-btn',
            content: 'close',
        },
        onClick: () => {
            onClose()
        }
    })

    this.render()
    modalDIMEl.append(modalContainerEl)
    targetEl.append(modalDIMEl)

}
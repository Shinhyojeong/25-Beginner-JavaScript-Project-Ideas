import Modal from '../atomic/Modal.js'

export default function AddSticky({
    targetEl,
    initialState,
    onClose,
    onSubmit,
}){
    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        addStickyModal.setState({
            ...addStickyModal.state,
            visible : this.state
        })
    }

    const addStickyModal = new Modal({
        targetEl,
        initialState : {
            visible : this.state.modalVisible,
            className : 'add-sticky-modal' ,
            content : '<textarea class="add-sticky-textarea" placeholder="내용을 입력해 주세요"/>'
        },
        onClose: () => {
            onClose()
        }
    })

    const addTextArea = document.querySelector('.add-sticky-textarea')
    addTextArea.addEventListener('keyup', e => {
        if(e.key !== 'Enter'){ return }

        const { target } = e
        onSubmit(target.value)
        target.value = ''
    })
}
export default function Button({
    targetEl,
    initialState,
    onClick
}){
    this.state = initialState

    const btnEl = document.createElement('div')
    btnEl.className = this.state.btnClassName

    this.render = () => {
        const { btnClassName, content } = this.state
        btnEl.innerHTML = `
            <button class='btn' name='${btnClassName}-btn'>${content}</button>
        `
    }

    this.render()
    targetEl.append(btnEl)

    btnEl.addEventListener('click', e => {
        if(!e.target.name){ return }

        onClick(e)
    })
}
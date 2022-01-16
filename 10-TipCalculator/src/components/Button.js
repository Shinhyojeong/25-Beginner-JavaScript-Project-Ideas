export default function Button({
    targetEl,
    initialState = 'Click Me !',
    onClick
}){
    const btnEl = document.createElement('div')
    btnEl.className = 'box-btn'

    this.state = initialState

    this.render = () => {
        btnEl.innerHTML = `
            <button class="btn-calc" name="calc">${this.state}</button>
        `
    }

    this.render()
    targetEl.append(btnEl)

    btnEl.addEventListener('click', e => {
        if(!e.target.name){ return }

        onClick()
    })
}
export default function Button({
    targetEl,
    onClick
}){
    const btnEl = document.createElement('div')
    btnEl.className = 'box-btn'

    this.render = () => {
        btnEl.innerHTML = `
            <button class="btn-calc" name="calc">Calculate</button>
        `
    }

    this.render()
    targetEl.append(btnEl)

    btnEl.addEventListener('click', e => {
        if(!e.target.name){ return }

        onClick()
    })
}
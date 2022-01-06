export default function CountingBtns({
    targetEl,
    onCount,
}){
    const btnContainerEl = document.createElement('div')
    const increaseBtn = document.createElement('button')
    const decreaseBtn = document.createElement('button')

    btnContainerEl.className = "btn-container"
    increaseBtn.className = "btn_increase"
    decreaseBtn.className = "btn_decrease"

    increaseBtn.value = 'increase'
    decreaseBtn.value = 'decrease'

    increaseBtn.textContent = 'increase'
    decreaseBtn.textContent = 'decrease'

    btnContainerEl.append(decreaseBtn, increaseBtn)
    targetEl.append(btnContainerEl)

    btnContainerEl.addEventListener('click', e => {
        const value = e.target.value
        if(!value){
            return
        }

        onCount(value)
    })
}
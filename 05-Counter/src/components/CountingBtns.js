export default function CountingBtns({ targetEl, onCount }) {
  const btnContainerEl = document.createElement('div')
  btnContainerEl.className = 'btn-container'

  this.render = () => {
    btnContainerEl.innerHTML = `
            <button class="btn_decrease" value="decrease">decrease</button>
            <button class="btn_increase" value="increase">increase</button>
        `
  }

  this.render()
  targetEl.append(btnContainerEl)

  btnContainerEl.addEventListener('click', (e) => {
    const value = e.target.value
    if (!value) {
      return
    }

    onCount(value)
  })
}

export default function Button({ targetEl, initialState, onClick }) {
  this.state = initialState

  const btnEl = document.createElement('div')
  btnEl.className = this.state.className

  this.render = () => {
    const { value, content } = this.state

    btnEl.innerHTML = `
            <button value='${value}'>${content}</button>
        `
  }

  this.render()
  targetEl.append(btnEl)

  btnEl.addEventListener('click', (e) => {
    const { target } = e

    if (!target.value) {
      return
    }

    onClick(target)
  })
}

export default function Button({ targetEl, initialState, onClick }) {
  this.state = initialState

  const btnEl = document.createElement('div')
  btnEl.className = this.state.className

  this.render = () => {
    const { className, content } = this.state

    btnEl.innerHTML = `
            <button class='btn' name='${className}-btn'>${content}</button>
        `
  }

  this.render()
  targetEl.append(btnEl)

  btnEl.addEventListener('click', (e) => {
    if (!e.target.name) {
      return
    }

    onClick(e)
  })
}

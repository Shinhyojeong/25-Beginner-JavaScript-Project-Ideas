export default function Button({
  targetEl,
  initialState = 'Click Me !',
  onClick,
}) {
  const btnEl = document.createElement('button')
  btnEl.className = 'btn-calc'

  this.state = initialState

  this.render = () => {
    btnEl.innerHTML = `
            ${this.state}
        `
  }

  this.render()
  targetEl.append(btnEl)

  btnEl.addEventListener('click', (e) => {
    onClick()
  })
}

export default function RemoveList({ targetEl, onClick }) {
  const removeBtnContainer = document.createElement('div')
  removeBtnContainer.className = 'remove-container'

  this.render = () => {
    removeBtnContainer.innerHTML = `
            <button class="btn-remove" name="remove">All Rmove</button>
        `
  }

  this.render()
  targetEl.append(removeBtnContainer)

  removeBtnContainer.addEventListener('click', (e) => {
    if (!e.target.name) {
      return
    }
    onClick()
  })
}

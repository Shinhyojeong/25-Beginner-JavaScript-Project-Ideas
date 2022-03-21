export default function ChangeImageBtns({ targetEl, onClick }) {
  const btnContainerEl = document.createElement('div')
  btnContainerEl.className = 'btn-container'

  this.render = () => {
    btnContainerEl.innerHTML = `
            <button class="btn-box prev">
                <img src="/src/assets/icn/prev-arrow.png" alt="prev-icn" class="prev_icn" name="prev"/>
            </button>
            <button class="btn-box next">
                <img src="/src/assets/icn/next-arrow.png" alt="next-icn" class="next_icn" name="next"/>
            </button>
        `
  }

  this.render()
  targetEl.append(btnContainerEl)

  btnContainerEl.addEventListener('click', (e) => {
    const { name } = e.target

    if (!name) {
      return
    }

    onClick(name)
  })
}

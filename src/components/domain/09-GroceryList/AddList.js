export default function AddList({ targetEl, onSubmit }) {
  const addContainer = document.createElement('input')
  addContainer.className = 'input-add'
  addContainer.placeholder = '내용을 입력해 주세요.'

  targetEl.append(addContainer)

  addContainer.addEventListener('keyup', (e) => {
    e.preventDefault()
    const { value } = e.target

    if (e.keyCode !== 13) {
      return
    }
    onSubmit(value)
    e.target.value = ''
  })
}

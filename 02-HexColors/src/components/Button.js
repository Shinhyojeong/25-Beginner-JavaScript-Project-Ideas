export default function Button({ targetEl, onClick }) {
  const buttonEl = document.createElement('button')
  buttonEl.textContent = 'Click Me'
  buttonEl.className = 'container-btn'

  targetEl.appendChild(buttonEl)

  const createRandomColor = () =>
    `#${Math.round(Math.random() * 0xff_ff_ff).toString(16)}`

  buttonEl.addEventListener('click', (e) => {
    onClick({
      startColor: createRandomColor(),
      endColor: createRandomColor(),
    })
  })
}

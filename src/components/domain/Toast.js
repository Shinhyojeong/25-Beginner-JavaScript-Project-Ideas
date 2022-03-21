export default function Toast({ targetEl }) {
  const ToastEl = document.createElement('div')
  ToastEl.className = 'toast-container'

  this.state = {
    tip: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    ToastEl.classList.add('show')
    ToastEl.innerHTML = `
            <span class="toast-text">Tip $${this.state.tip} Each</span>
        `
    setTimeout(() => {
      ToastEl.classList.remove('show')
    }, 3500)
  }

  targetEl.append(ToastEl)
}

import { applyClassName, createElement } from '../../utils/createElement.js'

export default function Radio({ targetEl, initialstate, onSelect }) {
  const radioEl = createElement('form')

  this.state = {
    ...initialstate,
    prevValue: null,
  }

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { name, elClassName, selectList, checked } = this.state

    applyClassName(radioEl, elClassName)
    radioEl.checked = checked ?? false

    radioEl.innerHTML = `
      ${selectList
        ?.map((item) => {
          const { value, content } = item

          return `
            <div class="answer-item">
              <input type="radio" id='${name}-${value}' name =${name} value=${value} />
              <label for='${name}-${value}'>${content}</label>
            </div>
          `
        })
        .join('')}
    `
  }

  this.render()
  targetEl.append(radioEl)

  radioEl.addEventListener('click', (e) => {
    const inputEl = e.target.closest('input')

    if (!inputEl) {
      return
    }

    const selectedNum = inputEl.value
    const { prevValue } = this.state

    prevValue !== selectedNum && onSelect(selectedNum)
  })
}

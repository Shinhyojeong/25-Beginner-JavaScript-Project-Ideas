import { applyClassName, createElement } from '../../utils/createElement.js'

export default function Radio({ targetEl, initialstate }) {
  const radioEl = createElement('div')

  this.state = initialstate

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { name, elClassName, selectList } = this.state

    applyClassName(radioEl, elClassName)

    radioEl.innerHTML = `
      ${selectList
        ?.map((item) => {
          const { value, content } = item

          return `
            <div class="answer-item">
              <input type="radio" id=${value} name =${name} value=${value} />
              <label for=${value}>${content}</label>
            </div>
          `
        })
        .join('')}
    `
  }

  this.render()
  targetEl.append(radioEl)
}

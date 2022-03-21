import { applyClassName, createElement } from '@utils/handleElement'

export default function Divider({
  targetEl,
  initialState = { marginSize: '10px' },
}) {
  const dividerEl = createElement('hr')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { dividerType, marginSize, elClassName } = this.state

    applyClassName(dividerEl, elClassName)

    switch (dividerType) {
      case 'vertical':
        dividerEl.style.margin = `0 ${marginSize}`
        dividerEl.classList.add('vertical')
        return
      default:
        dividerEl.style.margin = `${marginSize} 0`
        dividerEl.classList.remove('vertical')
    }
  }

  this.render()
  targetEl.append(dividerEl)
}

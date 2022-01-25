import Button from '../atomic/Button.js'
import Text from '../atomic/Text.js'

export default function Header({ targetEl, initialState, onClick }) {
  const headerEl = document.createElement('div')
  headerEl.className = 'header'

  this.state = initialState

  this.render = () => {
    new Text({
      targetEl: headerEl,
      initialState: {
        content: 'MATH 4 KIDS',
        className: 'logo',
        containerType: 'div',
      },
    })

    this.state?.forEach((item) => {
      const { name, operator } = item

      new Button({
        targetEl: headerEl,
        initialState: {
          content: name,
          className: `${name}-btn`,
          value: operator,
        },
        onClick: (target) => {
          onClick(target.value)
        },
      })
    })
  }

  this.render()
  targetEl.append(headerEl)
}

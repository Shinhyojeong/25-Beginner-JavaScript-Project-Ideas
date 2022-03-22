import { Button } from '@base'
import { Container } from '@domain/02-HexColors'
import { createElement } from '@utils/handleElement'
import '@style/02-HexColors.css'

export default function HexColors({ targetEl }) {
  const hexColorsEl = createElement()

  this.state = {
    startColor: 'white',
    endColor: 'white',
  }

  this.setState = (nextState) => {
    this.state = nextState
    container.setState(this.state)
  }

  const container = new Container({
    targetEl: hexColorsEl,
    initialState: {
      ...this.state,
    },
  })

  new Button({
    targetEl: hexColorsEl,
    onClick: (colors) => {
      this.setState(colors)
    },
  })

  targetEl.append(hexColorsEl)
}

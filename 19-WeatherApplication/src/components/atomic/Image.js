import { createElement } from '../../utils/createElement.js'

export default function Image({ targetEl, initialState }) {
  const { elClassName } = initialState
  const ImageEl = createElement('img', elClassName)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { src } = this.state

    src && ImageEl.append('src', src)
  }

  this.render()
  targetEl.append(ImageEl)
}

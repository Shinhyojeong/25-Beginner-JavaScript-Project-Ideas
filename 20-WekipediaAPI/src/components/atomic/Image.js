import { createElement } from '../../utils/createElement.js'

export default function Image({ targetEl, initialState }) {
  const imgEl = createElement('img', initialState.elClassName)

  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { imgUrl, elAlt } = this.state
    imgEl.alt = elAlt
    imgEl.src = imgUrl
  }

  this.render()
  targetEl.append(imgEl)
}

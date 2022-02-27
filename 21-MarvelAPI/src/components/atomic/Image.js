import { applyClassName, createElement } from '../../utils/createElement.js'

export default function Image({ targetEl, initialState }) {
  const imageEl = createElement('img')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { elClassName, imgUrl, imgAlt } = this.state

    imageEl.src = imgUrl
    imageEl.alt = imgAlt
    applyClassName(imageEl, elClassName)
  }

  this.render()
  targetEl.append(imageEl)
}

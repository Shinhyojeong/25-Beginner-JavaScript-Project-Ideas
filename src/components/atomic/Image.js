import { createElement } from '../../utils/createElement.js'

export default function Image({ targetEl, initialState }) {
  this.state = initialState

  const { elClassName, imgUrl } = this.state
  const imageEl = createElement('img', elClassName)
  imageEl.setAttribute('src', imgUrl)

  targetEl.append(imageEl)
}

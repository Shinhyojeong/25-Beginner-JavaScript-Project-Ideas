import { createElement } from '../../utils/createElement.js'
import Text from '../atomic/Text.js'

export default function Header({ targetEl }) {
  const headerEl = createElement('div', 'header')

  new Text({
    targetEl,
    initialState: {
      elType: 'span',
      elClassName: 'header-title',
      content: 'Marvel',
    },
  })

  targetEl.append(headerEl)
}

import { createElement } from '../../utils/createElement.js'
import Text from '../base/Text.js'

export default function Header({ targetEl }) {
  const headerEl = createElement('div', 'header')

  new Text({
    targetEl: headerEl,
    initialState: {
      elType: 'span',
      elClassName: 'logo',
      content: 'Quiz Pro',
    },
  })

  targetEl.append(headerEl)
}

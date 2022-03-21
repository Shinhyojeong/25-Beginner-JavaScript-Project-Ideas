import { Text } from '@base'
import { createElement } from '@utils/handleElement'

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

import { Text } from '@base'
import { createElement } from '@utils/handleElement'

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

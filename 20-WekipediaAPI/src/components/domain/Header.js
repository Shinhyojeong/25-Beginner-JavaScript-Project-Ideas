import { createElement } from '../../utils/createElement.js'
import Input from '../atomic/Input.js'

export default function Header({ targetEl, onChange }) {
  const headerEl = createElement('div', 'header')

  new Input({
    targetEl,
    initialState: {
      elClassName: 'wiki-input',
      elPlaceholder: 'Search Wikipedia...',
    },
    onKeyUp: (e) => {
      e.key === 'Enter' && onChange(e.target.value)
    },
  })

  targetEl.append(headerEl)
}

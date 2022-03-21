import { Input } from '@base'
import { createElement } from '@utils/handleElement'

export default function Header({ targetEl, onChange }) {
  const headerEl = createElement('div', 'header')

  new Input({
    targetEl,
    initialState: {
      elClassName: 'wiki-input',
      elPlaceholder: 'Search Wikipedia...',
    },
    onKeyUp: (e) => {
      if (e.key === 'Enter') {
        onChange(e.target.value)
        e.target.value = ''
      }
    },
  })

  targetEl.append(headerEl)
}

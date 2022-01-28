import { Input, Text, Button } from '../atomic/index.js'
import { createElement } from '../../utils/createElement.js'

export default function Header({ targetEl, onSubmit }) {
  const headerEl = createElement('div', 'header')

  new Text({
    targetEl: headerEl,
    initialState: {
      containerType: 'span',
      elClassName: 'header-logo',
      content: 'Unsplash API Deomo',
    },
  })

  new Input({
    targetEl: headerEl,
    initialState: {
      elClassName: 'search-input',
      elPlaceholder: 'search..',
    },
    onKeyUp: (e) => {
      const { key, target } = e

      if (key === 'Enter') {
        onSubmit(target.value)
        target.value = ''
      }
    },
  })

  targetEl.append(headerEl)
  const serachInputEl = document.querySelector('.search-input')

  new Button({
    targetEl: headerEl,
    initialState: {
      elClassName: 'search-btn',
      value: 'search',
      content: 'search',
    },
    onClick: () => {
      console.log(serachInputEl)
      onSubmit(serachInputEl.value)
      serachInputEl.value = ''
    },
  })
}

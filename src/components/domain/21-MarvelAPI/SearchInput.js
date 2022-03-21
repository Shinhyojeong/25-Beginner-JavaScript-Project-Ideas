import { Button, Input } from '@base'
import { createElement } from '@utils/handleElement'

export default function SearchInput({ targetEl, initialState, onSubmit }) {
  const searchInputEl = createElement('div', initialState.elClassName)

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { inputPlaceholder, btnContent } = this.state

    searchInputEl.innerHTML = ``

    new Input({
      targetEl: searchInputEl,
      initialState: {
        elClassName: `search-input ${btnContent}`,
        elPlaceholder: inputPlaceholder,
      },
      onKeyUp: (e) => {
        if (e.key === 'Enter') {
          onSubmit(e.target)
        }
      },
    })

    new Button({
      targetEl: searchInputEl,
      initialState: {
        elClassName: 'search-btn',
        content: 'SEARCH',
      },
      onClick: () => {
        const searchInput = document.querySelector(`.${btnContent}`)
        onSubmit(searchInput)
      },
    })
  }

  this.render()
  targetEl.append(searchInputEl)
}

import { createElement } from '../../utils/createElement.js'
import { Text, Input } from '../atomic/index.js'

export default function SearchWeather({ targetEl, initialState, onSubmit }) {
  const searchContainerEl = createElement('div', 'search-container')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    searchContainerEl.innerHTML = ``

    new Text({
      targetEl: searchContainerEl,
      initialState: {
        elType: 'span',
        elClassName: 'searcher-title',
        content: 'Search weather',
      },
    })

    new Input({
      targetEl: searchContainerEl,
      initialState: {
        elClassName: 'searcher-input',
        placeholder: 'city, state',
      },
      onKeyUp: (e) => {
        if (e.key === 'Enter') {
          onSubmit(e.target.value)
        }
      },
    })

    new Text({
      targetEl: searchContainerEl,
      initialState: {
        elType: 'div',
        elClassName: `search-result ${!this.state && 'visible'}`,
        content: '결과를 찾을 수 없습니다. 다시 입력해 주세요!',
      },
    })
  }

  this.render()
  targetEl.append(searchContainerEl)
}

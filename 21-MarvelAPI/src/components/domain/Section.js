import Card from './Card.js'
import CardList from './CardList.js'
import SearchInput from './SearchInput.js'
import { applyClassName, createElement } from '../../utils/createElement.js'
import { request } from '../../api/api.js'

export default function Section({ targetEl, initialState }) {
  const sectionEl = createElement('section')
  const searchContainerEl = createElement('div', 'search-container')
  const resultContainerEl = createElement('div', 'result-container')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    resultList.setState({
      ...resultList.state,
      cardList: this.state,
    })
  }

  const { elClassName, searchList, cardInfo, fetchUrl, defaultResult } =
    this.state
  applyClassName(sectionEl, elClassName)

  new Card({
    targetEl: searchContainerEl,
    initialState: {
      elClassName: 'search-card',
      cardInfo,
    },
  })

  searchList?.forEach((searchInfo) => {
    new SearchInput({
      targetEl: searchContainerEl,
      initialState: searchInfo,
      onSubmit: async (target) => {
        const data = await request(`${fetchUrl}${target.value}`)

        this.setState(data)
      },
    })
  })

  const resultList = new CardList({
    targetEl: resultContainerEl,
    initialState: {
      elClassName: 'result-list',
      itemClassName: 'result-item',
      cardList: defaultResult,
    },
  })

  sectionEl.append(searchContainerEl, resultContainerEl)
  targetEl.append(sectionEl)
}

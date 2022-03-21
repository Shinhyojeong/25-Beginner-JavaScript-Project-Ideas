import { Text } from '@base'
import ResultItem from './ResultItem'
import { createElement } from '@utils/handleElement'

export default function ResultList({ targetEl, initialState }) {
  const resultListEl = createElement('div', 'result-list')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { searchValue, searchResult } = this.state
    resultListEl.innerHTML = ``

    new Text({
      targetEl: resultListEl,
      initialState: {
        elType: 'div',
        elClassName: 'search-value',
        content: searchValue && `Result for '${searchValue}'`,
      },
    })

    searchResult?.forEach((item) => {
      new ResultItem({
        targetEl: resultListEl,
        initialState: item,
      })
    })
  }

  this.render()
  targetEl.append(resultListEl)
}

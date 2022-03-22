import { Header, ResultList } from '@domain/20-WekipediaApi'
import { createElement } from '@utils/handleElement'
import { request } from '@api/api.js'

export default function WekipediaApi({ targetEl }) {
  const wekipediaApiEl = createElement()

  this.state = {
    searchValue: '',
    searchResult: [],
  }

  this.setState = (nextState) => {
    this.state = nextState
    resultList.setState(this.state)
  }

  new Header({
    targetEl: wekipediaApiEl,
    onChange: async (searchValue) => {
      const data = await request(searchValue)
      this.setState({
        searchValue,
        searchResult: Object.values(data.query.pages),
      })
    },
  })

  const resultList = new ResultList({
    targetEl: wekipediaApiEl,
    initialState: this.state,
  })

  targetEl.append(wekipediaApiEl)
}

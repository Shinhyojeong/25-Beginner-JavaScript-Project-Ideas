import { Header, ResultList } from '@base/20-WekipediaAPI'
import { request } from '@api/api.js'

export default function WekipediaApi({ targetEl }) {
  this.state = {
    searchValue: '',
    searchResult: [],
  }

  this.setState = (nextState) => {
    this.state = nextState
    resultList.setState(this.state)
  }

  new Header({
    targetEl,
    onChange: async (searchValue) => {
      const data = await request(searchValue)
      this.setState({
        searchValue,
        searchResult: Object.values(data.query.pages),
      })
    },
  })

  const resultList = new ResultList({
    targetEl,
    initialState: this.state,
  })
}

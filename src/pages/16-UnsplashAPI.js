import { Header, ReadImageList } from '@domain/16-UnsplashAPI'
import { fetchUnsplashApi } from '@utils/handleUnsplashData.js'

export default function App({ targetEl }) {
  this.state = {
    searchTerm: '',
    searchResult: '',
  }

  this.setState = (nextState) => {
    this.state = nextState
    readImageList.setState(this.state.searchResult)
  }

  new Header({
    targetEl,
    onSubmit: async (searchTerm) => {
      const searchResult = await fetchUnsplashApi(searchTerm)
      this.setState({
        ...this.state,
        searchTerm,
        searchResult,
      })
    },
  })

  const readImageList = new ReadImageList({
    targetEl,
    initialState: {},
  })
}

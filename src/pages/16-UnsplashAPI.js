import { Header, ReadImageList } from '@domain/16-UnsplashAPI'
import { fetchUnsplashApi } from '@utils/handleUnsplashData.js'
import { createElement } from '@utils/handleElement'

export default function UnsplashApi({ targetEl }) {
  const unsplashApiEl = createElement()

  this.state = {
    searchTerm: '',
    searchResult: '',
  }

  this.setState = (nextState) => {
    this.state = nextState
    readImageList.setState(this.state.searchResult)
  }

  new Header({
    targetEl: unsplashApiEl,
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
    targetEl: unsplashApiEl,
    initialState: {},
  })

  targetEl.append(unsplashApiEl)
}

import { Image, Text } from '@base'
import { createElement } from '@utils/handleElement'
const URL_END_POINT = 'https://en.wikipedia.org/?curid='

export default function ResultItem({ targetEl, initialState }) {
  const resultItemEl = createElement('a', 'item-link')
  resultItemEl.target = '_blank'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { thumbnail, pageid, title } = this.state
    resultItemEl.href = `${URL_END_POINT}${pageid}`
    resultItemEl.innerHTML = ``

    thumbnail &&
      new Image({
        targetEl: resultItemEl,
        initialState: {
          elClassName: 'result-item_img',
          elAlt: `${title}_img`,
          imgUrl: thumbnail.source,
        },
      })

    new Text({
      targetEl: resultItemEl,
      initialState: {
        elType: 'span',
        elClassName: 'result-itme_title',
        content: title,
      },
    })
  }

  this.render()
  targetEl.append(resultItemEl)
}

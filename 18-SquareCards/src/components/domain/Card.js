import { createElement } from '../../utils/createElement.js'
import Text from '../atomic/Text.js'
import Image from '../atomic/Image.js'

export default function Card({ targetEl, initialState }) {
  const cardContainerEl = createElement('div', 'card-container')

  this.state = initialState
  //img, title, content

  const { imgUrl, title, content, submitUrl } = this.state

  new Image({
    targetEl: cardContainerEl,
    initialState: {
      elClassName: 'card-img',
      imgUrl,
      // 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjFfMjEy%2FMDAxNjQwMDkzMzk1ODc3.w_VrgKfM9tA8RYPxtA6kZbKD1ZW-DakJRG_w45Jwk1cg.7FA3x_mWKK1u3FgRz0fyJplesugfkBA30rUB3nBGMH8g.JPEG.ha4120%2FIMG_4073.jpg&type=sc960_832',
    },
  })

  new Text({
    targetEl: cardContainerEl,
    initialState: {
      elType: 'div',
      elClassName: 'card-title',
      content: title,
    },
  })

  new Text({
    targetEl: cardContainerEl,
    initialState: {
      elType: 'div',
      elClassName: 'card-content',
      content,
    },
  })

  targetEl.append(cardContainerEl)

  cardContainerEl.addEventListener('click', () => {
    location.href = submitUrl
  })
}

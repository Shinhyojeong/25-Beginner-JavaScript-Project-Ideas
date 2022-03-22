import {
  ChangeImageBtns,
  LoadImage,
  SlidePaging,
} from '@domain/06-ImageCarousel'
import { createElement } from '@utils/handleElement'
import '@style/06-ImageCarousel.css'

const START_SLIDE_NUMBER = 1
const END_SLIDE_NUMBER = 4

export default function ImageCarousel({ targetEl }) {
  const imageCarouselEl = createElement()
  const container = createElement('div', 'container')

  this.state = {
    slideNumber: START_SLIDE_NUMBER,
  }

  this.setState = (nextState) => {
    this.state = nextState
    loadImage.setState(this.state)
    slidePaging.setState(this.state)
  }

  const loadImage = new LoadImage({
    targetEl: container,
    initialState: this.state,
  })

  new ChangeImageBtns({
    targetEl: container,
    onClick: (btnType) => {
      const { slideNumber } = this.state
      let nextSlideNumber = slideNumber

      if (btnType === 'prev') {
        if (slideNumber - 1 < START_SLIDE_NUMBER) {
          nextSlideNumber = END_SLIDE_NUMBER
        } else {
          nextSlideNumber--
        }
      } else if (btnType === 'next') {
        if (slideNumber + 1 > END_SLIDE_NUMBER) {
          nextSlideNumber = START_SLIDE_NUMBER
        } else {
          nextSlideNumber++
        }
      }

      this.setState({
        slideNumber: nextSlideNumber,
      })
    },
  })

  // const slidePaging = new SlidePaging({
  //   targetEl,
  //   initialState: {
  //     slideNumber: this.state.slideNumber,
  //     startSlideNumber: START_SLIDE_NUMBER,
  //     endSlideNumber: END_SLIDE_NUMBER,
  //   },
  // })

  imageCarouselEl.append(container)
  targetEl.append(imageCarouselEl)
}

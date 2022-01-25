import ChangeImageBtns from './components/ChangeImageBtns.js'
import LoadImage from './components/LoadImage.js'
import SlidePaging from './components/SliderPaging.js'

const START_SLIDE_NUMBER = 1
const END_SLIDE_NUMBER = 4

export default function App({ targetEl }) {
  const container = document.createElement('div')
  container.className = 'container'
  targetEl.append(container)

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
      console.log(this.state.slideNumber)
    },
  })

  const slidePaging = new SlidePaging({
    targetEl,
    initialState: {
      slideNumber: this.state.slideNumber,
      startSlideNumber: START_SLIDE_NUMBER,
      endSlideNumber: END_SLIDE_NUMBER,
    },
  })
}

import { Text, Image } from '@base'
import { createElement } from '@utils/handleElement'

export default function ReadWeather({ targetEl, initialState }) {
  const weatherContainerEl = createElement('div', 'weather-container')

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { weatherIcn, temperature, city } = this.state

    weatherContainerEl.innerHTML = ``

    new Image({
      targetEl: weatherContainerEl,
      initialState: {
        elClassName: 'weather-icn',
        src: weatherIcn,
      },
    })

    new Text({
      targetEl: weatherContainerEl,
      initialState: {
        elType: 'span',
        elClassName: 'weather-temperature',
        content: temperature,
      },
    })

    new Text({
      targetEl: weatherContainerEl,
      initialState: {
        elType: 'span',
        elClassName: 'weather-city',
        content: city,
      },
    })
  }

  this.render()
  targetEl.append(weatherContainerEl)
}

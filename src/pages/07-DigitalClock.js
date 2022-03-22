import { Clock } from '@domain/07-DigitalClock'
import { createElement } from '@utils/handleElement'
import '@style/07-DigitalClock.css'

export default function DigitalClock({ targetEl }) {
  const digitalClockEl = createElement()

  new Clock({
    targetEl: digitalClockEl,
  })

  targetEl.append(digitalClockEl)
}

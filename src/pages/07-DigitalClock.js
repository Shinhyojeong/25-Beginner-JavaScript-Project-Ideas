import { Clock } from '@domain/07-DigitalClock'
import '@styles/07-DigitalClock.css'

export default function DigitalClock({ targetEl }) {
  new Clock({
    targetEl,
  })
}

const RESET_EVENT_NAME = 'reset-data'

export const reset = () => {
  window.dispatchEvent(new CustomEvent(RESET_EVENT_NAME))
}

export const resetForm = (inputReset) => {
  window.addEventListener(RESET_EVENT_NAME, (e) => {
    inputReset()
  })
}

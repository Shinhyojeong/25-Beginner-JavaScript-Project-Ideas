const RESET_EVENT_NAME = 'reset-data'
const RETAKE_EVENT_NAME = 'retake-answer'

export const reset = () => {
  window.dispatchEvent(new CustomEvent(RESET_EVENT_NAME))
}

export const resetForm = (inputReset) => {
  window.addEventListener(RESET_EVENT_NAME, (e) => {
    inputReset()
  })
}

export const resetRadio = (resetFuc) => {
  window.addEventListener(RETAKE_EVENT_NAME, (e) => {
    resetFuc()
  })
}

export const reTake = () => {
  window.dispatchEvent(new CustomEvent(RETAKE_EVENT_NAME))
}

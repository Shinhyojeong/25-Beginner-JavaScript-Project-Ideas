import { reset } from './customEvent.js'

export const checkComplete = (quizItemSheet) => {
  const { question, answerList, answerNum } = quizItemSheet

  answerList?.forEach((asnwer) => {
    if (!asnwer) {
      return false
    }
  })

  if (question && answerNum) {
    return true
  }

  return false
}

export function addQuizData() {
  const currentQuiz = this.state
  const formComplete = checkComplete(currentQuiz)
  if (!formComplete) {
    alert('형식을 채워주세용')
    return
  }

  reset()
}

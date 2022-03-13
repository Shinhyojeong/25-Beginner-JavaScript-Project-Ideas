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

export function addQuizData(submitQuizSheet, addMore = true) {
  const currentQuiz = this.state
  const formComplete = checkComplete(currentQuiz)

  if (!formComplete) {
    alert('형식을 채워주세용')
    return
  }

  submitQuizSheet(this.state, addMore)
  this.reset()
}

export const processingAnswerList = (answerList) =>
  answerList?.map((item, idx) => {
    return { value: idx, content: item }
  })

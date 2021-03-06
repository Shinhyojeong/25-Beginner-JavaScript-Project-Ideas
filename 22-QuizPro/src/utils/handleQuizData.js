import { disabledBtns } from './createElement.js'

export const checkComplete = (quizItemSheet) => {
  const { question, answerList, answerNum } = quizItemSheet

  answerList?.forEach((asnwer) => {
    if (!asnwer) {
      return false
    }
  })

  if (question && typeof answerNum === 'number') {
    return true
  }

  return false
}

export function addQuizData(submitQuizSheet, addMore = true, btnList) {
  const currentQuiz = this.state
  const formComplete = checkComplete(currentQuiz)

  if (!formComplete) {
    alert('형식을 채워주세용')
    return
  }

  if (!addMore) {
    disabledBtns(btnList, true)
  }

  submitQuizSheet(this.state, addMore)
  this.reset()
}

export const processingAnswerList = (answerList) =>
  answerList?.map((item, idx) => {
    return { value: idx, content: item }
  })

export const getRadioValue = () => {
  const answerRadioList = document.querySelectorAll('.question-answer')
  const selectedAnswerList = []

  answerRadioList?.forEach((radio) => {
    const selectedInput = radio.querySelector('input[type=radio]:checked')

    selectedAnswerList.push(selectedInput ? Number(selectedInput.value) : null)
  })

  return selectedAnswerList
}

export const checkResult = (quizList) => {
  const selectedAnswerList = getRadioValue()
  const updateResultList = quizList?.map((quiz, idx) => {
    const { answerNum, answerList } = quiz

    return {
      isCorrect: answerNum === selectedAnswerList[idx],
      questionNum: idx + 1,
      correctAnswer: answerList[answerNum],
    }
  })

  return updateResultList
}

export const processingResultText = (item) => {
  const { isCorrect, questionNum, correctAnswer } = item

  return `Question ${questionNum} : ${
    isCorrect ? 'Correct' : `Incorrect / Answer is ${correctAnswer}`
  }`
}

export const checkAllCorrect = (resultList) => {
  const findFalseIndex = resultList?.findIndex(
    ({ isCorrect }) => isCorrect === false
  )

  return findFalseIndex < 0
}

const MAX_NUMBER = 10
const MIN_NUMBER = 1

export const makeRandomNum = () =>
  Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER)

export const derivingCorrectAnswer = (operator) => {
  const firstNum = makeRandomNum()
  const secondNum = makeRandomNum()

  const correctAnswer = parseFloat(
    eval(`${firstNum} ${operator} ${secondNum}`).toFixed(1)
  )

  return correctAnswer < 0
    ? derivingCorrectAnswer(operator)
    : [firstNum, secondNum, correctAnswer]
}

export const randomAnswerArray = (correctAnswer, operator) => {
  const answerList = [
    correctAnswer,
    derivingCorrectAnswer(operator)[2],
    derivingCorrectAnswer(operator)[2],
  ]

  return answerList.sort(() => Math.random() - 0.5)
}

export const randomState = (operator) => {
  const nextState = derivingCorrectAnswer(operator)

  return {
    operator,
    firstNum: nextState[0],
    secondNum: nextState[1],
    correctAnswer: nextState[2],
    answerList: randomAnswerArray(nextState[2], operator),
  }
}

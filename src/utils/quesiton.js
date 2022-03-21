export const processQuestion = (firstNum, secondNum, operator) => [
  {
    className: 'question first-number',
    content: firstNum,
  },
  {
    className: 'question operator',
    content: operator,
  },
  {
    className: 'question second-number',
    content: secondNum,
  },
  {
    className: 'question equal',
    content: '=',
  },
  {
    className: 'question question-mark',
    content: '?',
  },
]

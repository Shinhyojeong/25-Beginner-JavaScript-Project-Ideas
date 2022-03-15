export const optimization = (currentState, nextState) =>
  JSON.stringify(currentState) === JSON.stringify(nextState)

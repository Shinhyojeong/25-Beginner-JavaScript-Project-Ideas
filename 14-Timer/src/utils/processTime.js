export const addZero = (time) => String(time).padStart(2, 0)

export const checkTime = (time) => {
    const seconds = time % 100
    const checkMinutes = Math.floor(time / 100)
    const minutes = checkMinutes > 60 ? checkMinutes - 60 : checkMinutes
    const hours = Math.floor(minutes / 60)

    return `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`
}
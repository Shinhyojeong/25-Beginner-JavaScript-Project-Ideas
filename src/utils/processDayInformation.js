export const confirmDay = (dayNum) => {
  if (dayNum === 1) {
    return 'MON'
  }
  if (dayNum === 2) {
    return 'TUS'
  }
  if (dayNum === 3) {
    return 'WED'
  }
  if (dayNum === 4) {
    return 'THU'
  }
  if (dayNum === 5) {
    return 'FRI'
  }
  if (dayNum === 6) {
    return 'SAT'
  }
  if (dayNum === 7) {
    return 'SUN'
  }
}

export const addZero = (time) => {
  if (10 > time) {
    return `0${time}`
  }
  return time
}

export const confirmAmPm = (hours) => {
  if (hours > 12) {
    return 'PM'
  }
  return 'AM'
}

export const readHours = (hours) => {
  if (hours > 12) {
    return addZero(hours - 12)
  }
  return addZero(hours)
}

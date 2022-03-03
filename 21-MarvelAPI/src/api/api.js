const API_END_POINT = 'http://gateway.marvel.com/v1/public/'
const API_KEY = '*'
const HASH = '*'

export const request = async (url) => {
  try {
    const res = await fetch(
      `${API_END_POINT}${url}&apikey=${API_KEY}&hash=${HASH}`
    )

    if (res.ok) {
      return res.json()
    }

    throw new Error('api 호출에 실패했습니다.')
  } catch (e) {
    console.log(e)
  }
}

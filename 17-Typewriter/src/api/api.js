const API_END_POINT = 'https://api.quotable.io/random'

export const request = async (url = '') => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`)

    if (res.ok) {
      return await res.json()
    }

    throw new Error('API를 불러오는데 실패했습니다')
  } catch (e) {
    console.log(e)
  }
}

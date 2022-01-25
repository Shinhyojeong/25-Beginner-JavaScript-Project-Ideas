export const API_END_POINT = 'https://free-quotes-api.herokuapp.com/'

export const request = async () => {
  try {
    const res = await fetch(API_END_POINT)

    if (res.ok) {
      return await res.json()
    }

    throw new Error('API를 불러오는데 실패했습니다.')
  } catch (e) {
    alert(e.message)
  }
}

const API_END_POINT = 'https://api.unsplash.com/search/photos'

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`)

    if (res.ok) {
      return await res.json()
    }

    throw new Error('API 요청 실패')
  } catch (e) {
    alert(e)
  }
}

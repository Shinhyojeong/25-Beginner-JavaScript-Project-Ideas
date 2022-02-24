const API_END_POINT =
  'https://en.wikipedia.org/w/api.php?action=query&origin=*&pilicense=any&prop=pageimages&pithumbsize=250&format=json&gsrlimit=100&generator=search&gsrsearch='

export const request = async (searchValue) => {
  try {
    const res = await fetch(`${API_END_POINT}${searchValue}`)

    if (res.ok) {
      return res.json()
    }

    throw new Error('검색 결과를 불러오는데 실패했습니다.')
  } catch (e) {
    console.log(e)
  }
}

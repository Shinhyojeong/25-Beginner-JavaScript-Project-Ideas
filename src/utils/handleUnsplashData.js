import { request } from '../api/api.js'
const CLIENT_KEY = 'uxEc60cz8p1C0Lskdr5a9LSu3cCfls2Dgcm1Sg7WoWM'

export const fetchUnsplashApi = async (searchTerm) => {
  const data = await request(
    `?query=${searchTerm}&per_page=30&client_id=${CLIENT_KEY}`
  )

  return processUnsplashData(data.results)
}

const processUnsplashData = (result) => result.map((item) => item.urls.full)

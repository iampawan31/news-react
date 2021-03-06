import axios from 'axios'

axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_NEWS_API_KEY

export const fetchTopHeadlines = async (currentCountry: string) => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=${currentCountry}`
  )
  return data.articles
}

export const fetchByTopic = async (topic: string | undefined) => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/latest_headlines?topic=${topic}&lang=en`
  )
  return data.articles
}

export const fetchBySearchTerm = async (searchTerm: string | null) => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/search?q=${searchTerm}&lang=en`
  )
  return data.articles
}

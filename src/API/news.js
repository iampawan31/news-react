import axios from 'axios'

axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_NEWS_API_KEY

export const fetchTopHeadlines = async (currentCountry) => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=${currentCountry}`
  )
  console.log(data, 7)
  return data.articles
}

export const fetchByCategory = async (category) => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/search?category=${category}&language=en`
  )
  console.log(data, 7)
  return data.articles
}

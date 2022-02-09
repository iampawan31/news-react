import axios from 'axios'

export const fetchTopHeadlines = async (currentCountry) => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${currentCountry}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  )
  console.log(data, 7)
  return data.articles
}

export const fetchByCategory = async (category) => {
  const { data } = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  )
  console.log(data, 7)
  return data.articles
}

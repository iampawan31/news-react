import axios from 'axios'
import { useState, useEffect } from 'react'
import NewsArticle from './NewsArticle'

type currentCountryType = {
  currentCountry: string
}

const TopHeadlines = ({ currentCountry }: currentCountryType) => {
  const [topHeadlines, setTopHeadlines] = useState([])
  const TOP_HEADLINES_URL = `https://newsapi.org/v2/top-headlines?country=${currentCountry}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`

  const getTopHeadlines = async () => {
    const { data } = await axios.get(TOP_HEADLINES_URL)
    if (data) {
      setTopHeadlines(data.articles)
    }
  }

  useEffect(() => {
    getTopHeadlines()
  }, [currentCountry, getTopHeadlines])

  return (
    <div>
      <div className="bg-white inline-block rounded-xl shadow-sm p-2 my-4">
        <div className="text-2xl font-bold">Top Headlines</div>
      </div>
      <div className="flex flex-col space-y-4">
        {topHeadlines &&
          topHeadlines.map((headline, index) => (
            <NewsArticle key={index} news={headline} />
          ))}
      </div>
    </div>
  )
}

export default TopHeadlines

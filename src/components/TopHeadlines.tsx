import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { fetchTopHeadlines } from '../API/news'
import NewsArticle from './NewsArticle'

type currentCountryType = {
  currentCountry: string
}

const TopHeadlines = ({ currentCountry }: currentCountryType) => {
  const [topHeadlines, setTopHeadlines] = useState([])

  useEffect(() => {
    const getTopHeadlines = async () => {
      const data = await fetchTopHeadlines(currentCountry)
      if (data) {
        setTopHeadlines(data)
      }
    }
    getTopHeadlines()
  }, [])

  return (
    <div>
      <div className="bg-white inline-block rounded-xl shadow-sm p-2 my-4">
        <div className="text-2xl font-bold">
          <FontAwesomeIcon icon="shield-virus" className="mr-2" />
          TOP HEADLINES
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-y-2 gap-x-4">
        {topHeadlines &&
          topHeadlines.map((headline, index) => (
            <NewsArticle key={index} news={headline} />
          ))}
      </div>
    </div>
  )
}

export default TopHeadlines

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { fetchTopHeadlines } from '../API/news'
import NewsArticle from './NewsArticle'
import PageHeader from './PageHeader'

type currentCountryType = {
  currentTime: string
  currentCountry: string
  startLoader: Function
  completeLoader: Function
}

const TopHeadlines = ({
  currentTime,
  currentCountry,
  startLoader,
  completeLoader,
}: currentCountryType) => {
  const [topHeadlines, setTopHeadlines] = useState([])

  useEffect(() => {
    const getTopHeadlines = async () => {
      startLoader()
      const data = await fetchTopHeadlines(currentCountry)
      if (data) {
        setTopHeadlines(data)
        completeLoader()
      }
    }
    getTopHeadlines()
  }, [currentCountry])

  return (
    <div>
      <PageHeader
        title="TOP HEADLINES"
        currentTime={currentTime}
        icon="shield-virus"
      />
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4 px-2 sm:px-0">
        {topHeadlines &&
          topHeadlines.map((headline, index) => (
            <NewsArticle key={index} news={headline} />
          ))}
      </div>
    </div>
  )
}

export default TopHeadlines

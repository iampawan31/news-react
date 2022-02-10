import { FC, ReactElement, useEffect, useState } from 'react'
import { fetchTopHeadlines } from '../API/news'
import NewsArticles from './NewsArticles'
import PageHeader from './PageHeader'
import { TopHeadlinesPropTypes } from '../types'

const TopHeadlines: FC<TopHeadlinesPropTypes> = ({
  currentTime,
  currentCountry,
  startLoader,
  completeLoader,
}): ReactElement => {
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
      <NewsArticles articles={topHeadlines} />
    </div>
  )
}

export default TopHeadlines

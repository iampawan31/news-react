import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchBySearchTerm } from '../API/news'
import { SearchResultsPropTypes } from '../types'
import NewsArticle from './NewsArticle'
import PageHeader from './PageHeader'

const SearchResults = ({
  currentTime,
  startLoader,
  completeLoader,
}: SearchResultsPropTypes) => {
  const [news, setNews] = useState([])
  const [icon, setIcon] = useState<any>(null)
  let location = useLocation()
  let params = new URLSearchParams(location.search)
  const queryTerm = params.get('q')

  useEffect(() => {
    const getNewsByTopic = async () => {
      startLoader()
      setIcon('search')
      const data = await fetchBySearchTerm(queryTerm)
      if (data) {
        setNews(data)
        completeLoader()
      }
    }

    getNewsByTopic()
  }, [queryTerm])

  return (
    <div>
      <PageHeader
        title={`Results for ${queryTerm}`}
        currentTime={currentTime}
        icon={icon}
      />
      <div className="grid grid-flow-row grid-cols-1 px-2 sm:px-0 sm:grid-cols-3 gap-y-2 gap-x-2">
        {news && news.map((n, index) => <NewsArticle key={index} news={n} />)}
      </div>
    </div>
  )
}

export default SearchResults

import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchByTopic } from '../API/news'
import { LINKS } from '../data/links'
import NewsArticle from './NewsArticle'
import PageHeader from './PageHeader'

type currentCountryType = {
  currentTime: string
  startLoader: Function
  completeLoader: Function
}

const Topic = ({
  currentTime,
  startLoader,
  completeLoader,
}: currentCountryType) => {
  const [news, setNews] = useState([])
  const [icon, setIcon] = useState<any>(null)
  let { topic } = useParams()
  useEffect(() => {
    const getNewsByTopic = async () => {
      startLoader()
      setIcon(
        LINKS && LINKS.find((link) => link?.name?.toLowerCase() === topic)?.icon
      )
      const data = await fetchByTopic(topic)
      if (data) {
        setNews(data)
        completeLoader()
      }
    }
    getNewsByTopic()
  }, [topic])

  return (
    <div>
      <PageHeader
        title={topic?.toLocaleUpperCase()}
        currentTime={currentTime}
        icon={icon}
      />
      <div className="grid grid-flow-row grid-cols-1 px-2 sm:px-0 sm:grid-cols-3 gap-y-2 gap-x-2">
        {news && news.map((n, index) => <NewsArticle key={index} news={n} />)}
      </div>
    </div>
  )
}

export default Topic

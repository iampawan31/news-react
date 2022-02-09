import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchByCategory } from '../API/news'
import { LINKS } from '../data/links'
import NewsArticle from './NewsArticle'

type currentCountryType = {
  currentCountry: string
}

const Category = ({ currentCountry }: currentCountryType) => {
  const [news, setNews] = useState([])
  const [icon, setIcon] = useState<any>(null)
  let { category } = useParams()
  useEffect(() => {
    const getNewsByCategory = async () => {
      setIcon(
        LINKS &&
          LINKS.find((link) => link?.name?.toLowerCase() === category)?.icon
      )
      const data = await fetchByCategory(category)
      if (data) {
        setNews(data)
      }
    }
    getNewsByCategory()
  }, [category])

  return (
    <div>
      <div className="bg-white inline-block rounded-xl shadow-sm p-2 my-4">
        <div className="text-2xl font-bold">
          <FontAwesomeIcon className="mr-2" icon={icon as IconName} />
          {category?.toUpperCase()}
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-y-2 gap-x-2">
        {news && news.map((n, index) => <NewsArticle key={index} news={n} />)}
      </div>
    </div>
  )
}

export default Category

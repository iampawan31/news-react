import { FC, ReactElement } from 'react'
import { NewsArticlesPropsTypes, NewsArticleType } from '../types'
import NewsArticle from './NewsArticle'

const NewsArticles: FC<NewsArticlesPropsTypes> = ({
  articles,
}): ReactElement => {
  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-6 px-2 sm:px-0">
      {articles &&
        articles.map((article: NewsArticleType, index: number) => (
          <NewsArticle key={index} news={article} />
        ))}
    </div>
  )
}

export default NewsArticles

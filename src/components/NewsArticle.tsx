import { FC, ReactElement } from 'react'
import { NewsArticlePropsTypes } from '../types'

const NewsArticle: FC<NewsArticlePropsTypes> = ({ news }): ReactElement => {
  return (
    <div className="bg-white max-w-md rounded-md shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={news.media}
        alt={news.title}
      />
      <div className="px-4 pt-4">
        {news.author && (
          <span className="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
            {news.author}
          </span>
        )}
        <span className="inline-block bg-gray-200 rounded px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
          {new Date(news.published_date).toDateString()}
        </span>
      </div>
      <div className="px-4 py-4">
        <a
          href={news.link}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-md mb-2 hover:underline transition"
        >
          {news.title}
        </a>
        <div className="text-secondary text-sm mb-2">{news.excerpt}</div>
      </div>
    </div>
  )
}

export default NewsArticle

type NewsArticleProps = {
  news: {
    title: string
    media: string
    excerpt: string
    source: {
      name: string
    }
    author: string
    publishedAt: string
    link: string
  }
}

const NewsArticle = ({ news }: NewsArticleProps) => {
  return (
    <div className="bg-white max-w-md rounded shadow-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={news.media}
        alt={news.title}
      />
      <div className="px-6 py-4">
        <a
          href={news.link}
          target="_blank"
          rel="noreferrer"
          className="font-bold text-md mb-2"
        >
          {news.title}
        </a>
        <div className="text-secondary text-sm mb-2">{news.excerpt}</div>
      </div>
      <div className="px-6 pt-2 pb-2 bottom-0">
        {news.author && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {news.author}
          </span>
        )}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {new Date(news.publishedAt).toDateString()}
        </span>
      </div>
    </div>
  )
}

export default NewsArticle

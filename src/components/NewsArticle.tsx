type NewsArticleProps = {
  news: {
    title: string
    urlToImage: string
    description: string
    source: {
      name: string
    }
    author: string
    publishedAt: string
    url: string
  }
}

const NewsArticle = ({ news }: NewsArticleProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-2 flex space-x-4">
      <div className="w-1/3">
        <img
          className="w-full h-48 rounded-xl object-cover"
          src={news.urlToImage}
          alt={news.title}
        />
      </div>
      <div className="w-2/3">
        <a href={news.url} target="_blank" className="text-2xl mb-4">
          {news.title.replace(`- ${news.source.name}`, '')}
        </a>
        <div className="text-secondary text-sm mb-4">{news.description}</div>
        <div className="font-semibold text-sm text-secondary">
          {news.author}
        </div>
        <div className="text-secondary text-xs">
          {new Date(news.publishedAt).toDateString()}
        </div>
      </div>
    </div>
  )
}

export default NewsArticle

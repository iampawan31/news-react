export type TopHeadlinesPropTypes = {
  currentTime: string
  currentCountry: string
  startLoader: Function
  completeLoader: Function
}

export type SearchResultsPropTypes = {
  currentTime: string
  startLoader: Function
  completeLoader: Function
}

export type CustomLinkPropsTypes = {
  link: {
    icon: string
    name: string
  }
}

export type NewsArticleType = {
  title: string
  media: string
  excerpt: string
  source: {
    name: string
  }
  author: string
  published_date: string
  link: string
}

export type NewsArticlePropsTypes = {
  news: NewsArticleType
}

export type NewsArticlesPropsTypes = {
  articles: Array<NewsArticleType>
}

export type PageHeaderPropsTypes = {
  title: string | undefined
  currentTime: string
  icon: string
}

export type TopicPropsTypes = {
  currentTime: string
  startLoader: Function
  completeLoader: Function
}

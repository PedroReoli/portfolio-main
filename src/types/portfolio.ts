export interface PortfolioProject {
  id: string
  name: string
  href: string
  domain: string
  type: string
  category: string
  image: string
  shortDescription: string
  stack: readonly string[]
  features: readonly string[]
  metrics: readonly { label: string; value: string }[]
}

export interface PortfolioArticle {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  htmlUrl: string
}

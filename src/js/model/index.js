import '../util/fetch'

export const FETCH_BLOG_DATA = () => window.fetch(`${location.origin}/data/blog/blogData.json`)

export const FETCH_BLOG_DETAIL = path => window.fetch(`${location.origin}${path}`)
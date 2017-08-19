import '../util/fetch'

export const FETCH_BLOG_DATA = () => window.fetch(`${location.origin}/data/blog/blogData.json`)
// export const FETCH_BLOG_DATA = () => window.fetch(`${location.origin}/generator/data/blog/blogData.json`)

export const FETCH_BLOG_DETAIL = path => window.fetch(`${location.origin}${path}`)
// export const FETCH_BLOG_DETAIL = path => window.fetch(`${location.origin}/generator${path}`)

export function FETCH_COMMENTS(commentUrl) {
  return window.fetch(commentUrl)
}
import '../util/fetch'
import { baseUrl } from 'initialState'


export const FETCH_BLOG_DATA = () => window.fetch(`${location.origin}${baseUrl}/data/blog/blogData.json`)
// export const FETCH_BLOG_DATA = () => window.fetch(`${location.origin}/generator/data/blog/blogData.json`)

export const FETCH_BLOG_DETAIL = path => window.fetch(`${location.origin}${baseUrl}${path}`)
// export const FETCH_BLOG_DETAIL = path => window.fetch(`${location.origin}/generator${path}`)

export function FETCH_COMMENTS(commentUrl) {
  return window.fetch(commentUrl)
}
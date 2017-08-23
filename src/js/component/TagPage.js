import React from 'react'

import ListPage from './ListPage'



export default function TagPage({ tag }) {
  return <ListPage tag={tag} isTagPage={true} />  
}
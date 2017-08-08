import React from 'react'

import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import LaboratoryPage from './LaboratoryPage'

export default function Blog({ route }) {
  const PageComponent = (() => {
    switch(route) {
      case 0: 
        return HomePage
      case 1:
        return ListPage
      case 2: 
        return DetailPage
      case 3:
        return LaboratoryPage
    }
  })()
  return (
    <div>
      <PageComponent />
    </div>
  )
}
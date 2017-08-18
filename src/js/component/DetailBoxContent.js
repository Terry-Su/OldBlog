import React from 'react'


export default class DetailBoxContent extends React.Component {
	 componentDidMount() {
    // const detailCatalogText = document.getElementById('detailCatalogData').innerHTML
    // const detailCatalog = JSON.parse(detailCatalogText)
    // this.props.onDetailBoxContentDidMount(detailCatalog)
  }
	render() {
		const { content } = this.props
		return (
			<div className='highlight' dangerouslySetInnerHTML={{__html: content}}></div>
		)
	}
}
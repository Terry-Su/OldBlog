import React from 'react'


export default class DetailBoxContent extends React.Component {
	render() {
		const { content } = this.props
		return (
			<div className='highlight' dangerouslySetInnerHTML={{__html: content}}></div>
		)
	}
}
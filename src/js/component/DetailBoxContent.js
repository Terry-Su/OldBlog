import React from 'react'


export default function DetailBoxContent({ content }) {
	return (
		<div className='highlight' dangerouslySetInnerHTML={{__html: content}}>
		</div>
	)
}
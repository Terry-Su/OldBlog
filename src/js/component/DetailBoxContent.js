import React from 'react'


export default function DetailBoxContent({ content }) {
	return (
		<div dangerouslySetInnerHTML={{__html: content}}>
		</div>
	)
}
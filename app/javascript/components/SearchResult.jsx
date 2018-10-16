// purely functional component with no state... renders declaratively based on props

import React from 'react'

export default ({ result }) => (
	<a className="item" href={`/apps/${result.id}`}>
		<div className="middle aligned content">
			<div className="header">{result.name}</div>
			<div className="meta">{result.author}</div>
		</div>
	</a>
);
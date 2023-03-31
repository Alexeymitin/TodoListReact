import React from 'react'
import './post-status-filter.css'


export default function PostStatusFilter() {
  return (
	<div>
		<div className='btn-group'>
			<button type='button' className='btn btn-info'>Все</button>
			<button type='button' className='btn btn-outline-secondary'>Понравилось</button>
		</div>
	</div>
  )
}

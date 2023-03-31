import React from 'react'
import PostListItem from '../postListItem/PostListItem'
import './post-list.css'

export default function PostList({posts, onDelete, onToggleImportant, onToggleLiked}) {
	const elements = posts.map((item) => {
		const {id, ...itemProps} = item;
		return (
			<li key={id} className='list-group-item'>
				<PostListItem 
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleImportant={() => onToggleImportant(id)}
				onToggleLiked={() => onToggleLiked(id)}
				/>
			</li>
		)
	})

  return (
	<div>
		<ul className='app-list list-group'>
			{elements}
		</ul>
	</div>
  )
}

import React from 'react'
import './post-add-form.css'

export default function PostAddForm({onAdd}) {
  return (
	<div>
		<div className='bottom-panel d-flex'>
			<input type="text" placeholder='Добавить дело' className='form-control new-post-label'/>
			<button 
			type='sumbit' 
			className='btn btn-outline-secondary'
			onClick={() => onAdd('Hello')}
			>Добавить</button>
		</div>
	</div>
  )
}

import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete }) => {
  const [edit, setEdit] = useState(false)
  const handleEditClick = () => {
    setEdit(!edit)
  }
  const handleClick = () => {
    onDelete(book.id);
  }
  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit />
  }
  return (
    <div className='book-show'>
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
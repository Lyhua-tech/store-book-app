import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
  const [edit, setEdit] = useState(false)
  const handleEditClick = () => {
    setEdit(!edit)
  }
  const handleClick = () => {
    onDelete(book.id);
  }
  const handleSubmit = (id , newTitle) => {
    setEdit(false)
    onEdit(id, newTitle)
  }
  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
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
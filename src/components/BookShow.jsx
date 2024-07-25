import React, { useState } from 'react'
import BookEdit from './BookEdit'
import useBookCreate from '../hooks/useBookCreate'

const BookShow = ({ book }) => {
  const [edit, setEdit] = useState(false)
  const { removeBooks } = useBookCreate();
  const handleEditClick = () => {
    setEdit(!edit)
  }
  const handleClick = () => {
    removeBooks(book.id);
  }
  const handleSubmit = () => {
    setEdit(false)
  }
  let content = <h3>{book.title}</h3>;
  if (edit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }
  return (
    <div className='book-show'>
      <div>{content}</div>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="" />
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
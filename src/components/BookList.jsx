import React from 'react'
import BookShow from './BookShow'

const BookList = ({ books , onDelete, handleUpdate}) => {
  const renderedBook = books.map((item) => {
    return <BookShow key={item.id} book={item} onDelete={onDelete} onUpdate={handleUpdate}/>
  })
  return (
    <div className='p-4 text-white grid grid-cols-3'>{renderedBook}</div>
  )
}

export default BookList
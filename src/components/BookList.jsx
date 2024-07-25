import React from 'react'
import BookShow from './BookShow';
import useBookCreate from '../hooks/useBookCreate';

const BookList = () => {
  const { books } = useBookCreate()
  const renderBooks = books.map((book) =>{
    return <BookShow key={book.id} book={book} />
  });
  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  )
}

export default BookList
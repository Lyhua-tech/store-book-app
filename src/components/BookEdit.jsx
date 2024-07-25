import React, { useState } from 'react'
import useBookCreate from '../hooks/useBookCreate';

const BookEdit = ({ book, onSubmit}) => {
  const [title, setTitle] = useState(book.title);
  const { modifyBooks } = useBookCreate();
  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    modifyBooks(book.id, title)
    onSubmit()
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" className='input' onChange={handleChange} value={title}/>
      <button className='button is-primary'>save</button>
    </form>
  )
}

export default BookEdit
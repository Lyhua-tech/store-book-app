import {React, useState } from 'react';
import useBookCreate from '../hooks/useBookCreate';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBooks } = useBookCreate();
  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    createBooks(title)
    setTitle('')
  }
  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" className='input' onChange={handleChange} value={title}/>
        <button className='button'>Add</button>
      </form>
    </div>
  )
}

export default BookCreate
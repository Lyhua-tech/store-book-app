import React, { useState } from 'react'

const BookEdit = () => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setEdit(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }
  return (
    <form className='book-edit'>
      <label>Title</label>
      <input type="text" className='input'/>
      <button className='button is-primary'>save</button>
    </form>
  )
}

export default BookEdit
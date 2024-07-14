import {React, useState} from 'react';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title)
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
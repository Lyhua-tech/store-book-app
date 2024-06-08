import React from 'react'
import { useState } from 'react'
const BookEdit = ({book, handleUpdate}) => {
  const [title , setTitle] = useState(book.title)
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate(title);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col items-start gap-2'>
        <label className='px-4'>Title</label>
        <input type="text" onChange={handleChange} value={title} className='bg-green-400 p-5 rounded-lg'/>
        <button className='px-4'>Save</button>
     </form>
    </div>
  )
}

export default BookEdit 
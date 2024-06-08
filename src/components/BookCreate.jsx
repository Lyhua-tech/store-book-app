import React from 'react'
import { useState } from 'react'

const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('')
    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('')
    }
  return (
    <div className='absolute bottom-0 bg-orange-600 w-full text-white font-mono flex flex-col'>
        <div className='m-4'>
            <h3>Add books</h3>
            <form action="" onSubmit={handleSubmit} className='flex gap-3 text-3xl'>
                <label htmlFor="">Title: </label>
                <input type="text" onChange={handleChange} value={title} className='rounded-lg focus:border-blue-500 bg-blue-500 pl-3'/>
                <button className='active:bg-blue-500 bg-blue-600 rounded-lg px-6 text-xl
                '>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default BookCreate
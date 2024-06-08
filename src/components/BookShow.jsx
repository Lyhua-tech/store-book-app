import React, { useState } from 'react';
import BookEdit from './BookEdit.jsx';
import '../index.css';
import editIcon from '../assets/edit.svg';

const BookShow = ({ book, onDelete , onUpdate}) => {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleUpdate = (newTitle) => {
    onUpdate(book.id, newTitle);
    setEdit(false);
  };

  let showBook = <h3>{book.title}</h3>;
  if (edit) {
    showBook = <BookEdit book={book} handleUpdate={handleUpdate}/>;
  }

  return (
    <div className='font-mono text-xl border border-gray-400 rounded-lg bg-green-400 pl-3 max-w-[230px]'>
      <div className='flex items-center gap-2 justify-end mr-4'>
        <button onClick={handleEdit} className='w-[18px]'>
            <img src={editIcon} alt="Edit" className='w-full' />
        </button>
        <button onClick={handleDelete}>x</button>
      </div>
      <img src={`https://picsum.photos/seed/${book.id}/200`} alt="book" />
      <div>{showBook}</div>
    </div>
  );
};

export default BookShow;

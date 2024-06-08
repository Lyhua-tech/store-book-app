import { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
function App() {
  const [books, setBooks] = useState([]);
  const deleteBook = (id) => {
    const removeBook = books.filter(item => {
      return item.id !== id;
    })
    setBooks(removeBook)
  }
  const createBook = (title) => {
    const updateBook = [
        ...books,
       {id: Math.round(Math.random() * 9191), title}
      ]
    setBooks(updateBook)
  }
  const handleUpdate = (id, title) => {
    const updateBook = books.map(book => {
      if(book.id === id) {
        return { ...book, title};
      } 
      return book;
    });
    setBooks(updateBook)
  }
  return (
    <div >
      <BookList books={books} onDelete={deleteBook} handleUpdate={handleUpdate}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default App

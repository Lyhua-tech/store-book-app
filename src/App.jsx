import { useState, useEffect } from 'react'
import './App.css'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter(item => item.id !== id);
    setBooks(updatedBooks);
  }

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  }

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title });
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  return (
    <div>
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

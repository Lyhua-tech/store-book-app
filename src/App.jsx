import {React , useState, useEffect} from 'react'
import BookCreate from './components/BookCreate';
import axios from 'axios';
import BookList from './components/BookList';
const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  // function for adding book into array
  const createBooks = async (title) =>{
    const response = await axios.post('http://localhost:3001/books', {
      title
    })
    const addBooks = [response.data ,...books]
    setBooks(addBooks)
  }
  // function for remove book
  const removeBooks = (id) =>{
    const rmBooks = books.filter(title => {
      return title.id !== id;
    })
    setBooks(rmBooks)
  }

  // function to edit the title of the book
  const modifyBooks = (id, newTitle) => {
    const changeBooks = books.map((title) => {
      if (title.id == id) {
        return {...title, title: newTitle}
      }
      return title
    })
    setBooks(changeBooks)
  }
  return (
    <div>
      <BookList books={books} onDelete={removeBooks} onEdit={modifyBooks}/>
      <BookCreate onCreate={createBooks}/>
    </div>
  )
}

export default App
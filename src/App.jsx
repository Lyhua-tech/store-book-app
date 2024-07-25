import {React , useEffect, useContext} from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import CreateBook from './context/books';
const App = () => {
  const { fetchBooks } = useContext(CreateBook);
  
  useEffect(() => {
    fetchBooks();
  }, [])

  return (
    <div>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App
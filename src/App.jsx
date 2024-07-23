import {React , useState} from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
const App = () => {
  const [books, setBooks] = useState([]);

  // function for adding book into array
  const createBooks = (title) =>{
    const addBooks = [
      {"id":Math.round(Math.random() * 9999), title} 
      , ...books
    ]
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
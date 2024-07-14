import {React , useState} from 'react'
import BookCreate from './components/BookCreate';
const App = () => {
  const [books, setBooks] = useState([]);

  const createBooks = (title) =>{
    console.log(title);
  } 
  return (
    <div>
      <BookCreate onCreate={createBooks}/>
    </div>
  )
}

export default App
import { createContext, useState } from "react";
import axios from "axios";

const CreateBook = createContext();

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }
     // function for adding book into array
    const createBooks = async (title) =>{
        const response = await axios.post('http://localhost:3001/books', {
        title
        })
        const addBooks = [response.data ,...books]
        setBooks(addBooks)
    }
    // function for remove book
    const removeBooks = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`)
        const rmBooks = books.filter(title => {
            return title.id !== id;
        })
        setBooks(rmBooks)
    }

    // function to edit the title of the book
    const modifyBooks = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle
        })
        const changeBooks = books.map((title) => {
        if (title.id == id) {
            return {...title, ...response.data}
        }
        return title
        })
        setBooks(changeBooks)
    }
    const valueToShare = {
        books,
        fetchBooks,
        createBooks,
        removeBooks,
        modifyBooks
    }
    return (
        <CreateBook.Provider value={valueToShare}>
            {children}
        </CreateBook.Provider>
    )
}

export { Provider }
export default CreateBook
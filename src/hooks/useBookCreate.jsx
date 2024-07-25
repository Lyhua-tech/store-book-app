import {React, useContext } from 'react'
import CreateBook from '../context/books'

const useBookCreate = () => {
  return useContext(CreateBook) 
}

export default useBookCreate
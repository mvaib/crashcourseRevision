import React from 'react'
import { useParams,Link } from 'react-router-dom'
const BookDetail = () => {
    const { id } = useParams();
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const book = books[id]
  return (
    <>
        <div className='detail-card'>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Price: ${book.price}</p>
            <p>Description: {book.description}</p>
            <Link to="/">Back to Home</Link>
        </div>
    </>
  )
}

export default BookDetail
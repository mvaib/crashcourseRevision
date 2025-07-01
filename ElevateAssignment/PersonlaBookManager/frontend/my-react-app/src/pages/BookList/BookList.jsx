import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BookList = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        const storeBooks = JSON.parse(localStorage.getItem('books')) || [];
        setBooks(storeBooks)
    },[])

  return (
    <>
        <div className='card-container'>
            {books.length > 0 ? books.map((book,index) => (
                <div key={index}>
                    <h2>{book.title}</h2>
                    <p><strong>Author:</strong> <span>{book.author}</span></p>
                    <p><strong>Genre:</strong> <span>{book.genre}</span></p>
                    <p><strong>Price:</strong> <span>${book.price}</span></p>
                    <Link to={`/book/${index}`}>View Details</Link>
                </div>
            )) : <p>No books found</p>}
        </div>
    </>
  )
}

export default BookList
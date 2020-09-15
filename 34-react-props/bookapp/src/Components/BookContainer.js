import React from 'react'
import Book from './Book';

const BookContainer = (props) => {
  return (
    <div>
      {
        props.books.map((book) => {
          return <Book book={book} />
        })
      }
    </div>
  )
}

export default BookContainer

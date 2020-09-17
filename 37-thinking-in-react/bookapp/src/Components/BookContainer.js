import React from 'react';
import BookCard from './BookCard'

const BookContainer = (props) => {
  return (
    <div className='maincontainer'>
      {
        props.books.map(book => <BookCard handleDeleteBook={props.handleDeleteBook} book={book} key={book.title} />)
      }
    </div>
  )
}

export default BookContainer;

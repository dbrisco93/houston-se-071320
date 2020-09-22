import React from 'react';
import BookCard from './BookCard'

const BookContainer = (props) => {

  return (
    <div className='maincontainer'>
      {
        props.books.map(book => <BookCard
           book={book}
            key={book.id}
              handleDeleteBtn={props.handleDeleteBtn}
        />)
      }
    </div>
  )
}

export default BookContainer;

import React from 'react';

const Book = ({ book }) => {

  const { title, author, img } = book

  return (
    <div>
      <div>
        <img src={img} alt="" />
        <h3>Book Name: {title} </h3>
        <h3>Author: {author} </h3>
      </div>
    </div>
  )
}

export default Book;

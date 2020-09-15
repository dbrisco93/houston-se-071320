import React from 'react';

const BookForm = (props) => {

  return (
    <span className={'form-outer'}>
      <h2> Add a new book </h2>
      <form className={'add-book'} onSubmit={(e) => props.handleSubmitBook(e)}>
        <input type="text" name='title' value={props.title} placeholder="title" onChange={(e) => props.handleInputChange(e)}  />
        <input type="text" name='img' value={props.img} placeholder="img" onChange={(e) => props.handleInputChange(e) } />
        <input type="text" name='author' value={props.author} placeholder="author" onChange={(e) => props.handleInputChange(e)}  />
        <input id="submit" type="submit" value="Submit" />
      </form>
    </span>
  )
}

export default BookForm;

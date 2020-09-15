import React, { Component } from 'react';
import './App.css';
import staticBooks from './books';

import Header from './Components/Header'
import BookContainer from './Components/BookContainer'

class App extends Component {

  state = {
    books: []
  }

  handleGetBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({ books: books }))
  }

  render(){
    return (
      <>
        <Header />
        <button onClick={() => this.handleGetBooks()}> Get Books </button>
        <BookContainer books={this.state.books} />
      </>
    )
  }
}

export default App;

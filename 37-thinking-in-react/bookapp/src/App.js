import React, { Component } from 'react';
import './App.css';
import staticBooks from './books';

import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

class App extends Component {

  state = {
    books: [],
    addingBook: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({ books: books }))
  }

  handleGetBooks = () => {
      this.setState({ addingBook: false })
  }

  handleAddBooks = () => {
    this.setState({ addingBook: true })
  }

  handleDeleteBook = (book) => {
    fetch(`http://localhost:3000/books/${book.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(_ => {
      const newBooks = [...this.state.books].filter(oldBook => oldBook.id !== book.id)
      this.setState({ books: newBooks })
    })
  }

  handleSubmitBook = (newBook) => {
    fetch('http://localhost:3000/books',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
    .then(res => res.json())
    .then(book => this.setState({
      addingBook: false,
      books: [...this.state.books,book]
    }))

  }

  decideWhatToRender = () => {
    if(this.state.addingBook){
      return (
        <>
          <button onClick={() => this.handleGetBooks()}> Get Books </button>
          <BookForm handleSubmitBook={this.handleSubmitBook} />
        </>
      )
    }else{
      return (
        <>
          <button onClick={() => this.handleAddBooks()}> Add Books </button>
          <BookContainer handleDeleteBook={this.handleDeleteBook} books={this.state.books} />
        </>
      )
    }
  }

  render(){
    return (
      <>
        <Header />
        { this.decideWhatToRender() }
      </>
    )
  }
}

export default App;

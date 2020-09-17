import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'


// import staticBooks from './books'

class App extends Component {

  state = {
    books: [],
    addingBook: false,
    editingBook: false
  }

  componentDidMount() {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
      this.setState({ books: books })
    })
  }

  handleDeleteBtn = (e,deleteBook) => {
    fetch(`http://localhost:3000/books/${deleteBook.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(_ => {
      const filteredBooks = [...this.state.books].filter(book => book.id !== deleteBook.id)
      this.setState({ ...this.state, books: filteredBooks })
    })
    .catch(error => console.log(error))
  }

  handleBookSubmit = (newBook) => {
    this.setState({ books: [...this.state.books, newBook] })
  }

  handleRenderingComponents = () => {
    if(this.state.addingBook){
      return (
          <BookForm handleBookSubmit={this.handleBookSubmit} />
      )
    }else{
      return (
        <BookContainer books={this.state.books} handleDeleteBtn={this.handleDeleteBtn}/>
      )
    }
  }

  render(){
    return (
      <div className="parent">
        <Header />
        <button onClick={() => this.setState({ addingBook: !this.state.addingBook })}> Add a Book </button>
        { this.handleRenderingComponents() }
      </div>
    );
  }
}

export default App;

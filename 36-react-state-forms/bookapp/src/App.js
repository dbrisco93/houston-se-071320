import React, { Component } from 'react';
import './App.css';
import staticBooks from './books';

import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

class App extends Component {

  state = {
    books: [],
    addingBook: false,
    title: '',
    author: '',
    img: ''
  }

  handleInputChange = (e) => {
    if(e.target.name === 'title'){
      this.setState({
        ...this.state,
        title: e.target.value
      })
    }else if(e.target.name === 'author'){
      this.setState({
        ...this.state,
        author: e.target.value
      })
    }else if(e.target.name === 'img'){
      this.setState({
        ...this.state,
        img: e.target.value
      })
    }
  }

  handleGetBooks = () => {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => this.setState({ books: books, addingBook: false }))
  }

  handleAddBooks = () => {
    this.setState({ addingBook: true })
  }

  handleSubmitBook = (e) => {
    e.preventDefault()
    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    }

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
      books: [...this.state.books,book],
      title: '', author: '', img: ''
    }))

  }

  decideWhatToRender = () => {
    if(this.state.addingBook){
      return <BookForm
                handleInputChange={this.handleInputChange}
                  handleSubmitBook={this.handleSubmitBook}
                    title={this.state.title}
                      author={this.state.author}
                        img={this.state.img} />
    }else{
      return <BookContainer books={this.state.books} />
    }
  }

  render(){
    return (
      <>
        <Header />
        <button onClick={() => this.handleGetBooks()}> Get Books </button>
        <button onClick={() => this.handleAddBooks()}> Add Books </button>
        { this.decideWhatToRender() }
      </>
    )
  }
}

export default App;

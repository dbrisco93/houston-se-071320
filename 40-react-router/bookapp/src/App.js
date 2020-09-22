import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm'

import Login from './Components/auth/Login'
import SignUp from './Components/auth/SignUp'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// import staticBooks from './books'

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    console.log('App component mounts.')

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
    this.setState({ books: [...this.state.books, newBook], addingBook: false })
  }

  render(){
    return (
      <div className="parent">
        <BrowserRouter>

          <Header />

          <Switch>

            <Route exact path="/" component={() => {
              return (
                <BookContainer books={this.state.books} handleDeleteBtn={this.handleDeleteBtn}/>
              )
            }} />

            <Route exact path="/newbook">
              <BookForm handleBookSubmit={this.handleBookSubmit} />
            </Route>

            <Route path="/login" component={Login} />

            <Route path="/signup" component={SignUp} />

            <Route>
              <Redirect to="/" />
            </Route>

          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import BookContainer from './Components/BookContainer';
import data from './data';

const App = () => {

  return (
    <div>
      <header>
        <h1> Book App (not Amazon duh!) </h1>
      </header>

      <BookContainer books={data} />
    </div>
  );
}

export default App;

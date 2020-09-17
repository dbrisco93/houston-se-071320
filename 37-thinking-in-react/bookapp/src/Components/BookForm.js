import React from 'react';

class BookForm extends React.Component {

  state = {
    title: '',
    author: '',
    img: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // if(e.target.name === 'title'){
    //   this.setState({
    //     ...this.state,
    //     title: e.target.value
    //   })
    // }else if(e.target.name === 'author'){
    //   this.setState({
    //     ...this.state,
    //     author: e.target.value
    //   })
    // }else if(e.target.name === 'img'){
    //   this.setState({
    //     ...this.state,
    //     img: e.target.value
    //   })
    // }
  }

  handleSubmitBook = (e) => {
    e.preventDefault()
    const newBook = {
      title: this.state.title,
      author: this.state.author,
      img: this.state.img
    }
    this.props.handleSubmitBook(newBook)
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2> Add a new book </h2>
        <form className={'add-book'} onSubmit={(e) => this.handleSubmitBook(e)}>
          <input type="text" name='title' value={this.state.title} placeholder="title" required onChange={(e) => this.handleInputChange(e)}  />
          <input type="text" name='img' value={this.state.img} placeholder="img" required onChange={(e) => this.handleInputChange(e) } />
          <input type="text" name='author' value={this.state.author} placeholder="author" required onChange={(e) => this.handleInputChange(e)}  />
          <input id="submit" type="submit" value="Submit" />
        </form>
      </span>
    )
  }
}

export default BookForm;

import React from 'react';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(newUser)
  }

  render(){
    return (
      <span className={'form-outer'}>
        <h2> Login </h2>
        <form className={'add-book'} onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleInputChange} name='username' placeholder="Username"  />
          <input type="password" value={this.state.password} onChange={this.handleInputChange} name='password' placeholder="Password"  />
          <input id="submit" type="submit" value="Submit" />
        </form>
      </span>
    )
  }
}

export default Login;

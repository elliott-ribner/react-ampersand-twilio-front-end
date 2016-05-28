import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      email: 'Insert Email',
      password: 'Insert Password'
    }
  },
  onEmailChange(event) {
    event.preventDefault();
    this.setState({
      email: event.target.value
    });
  },
  onPasswordChange(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
  },
  onSubmit(event) {
    event.preventDefault();
    app.me.register(this.state);
  },
  render() {
    return (
        <div className='container'>
          <h1>Register</h1>
          <form onSubmit={this.onSubmit} >
            <input name='email' onChange={this.onEmailChange} value={this.state.email} />
            <input name='password' onChange={this.onPasswordChange} value={this.state.password} />
            <button type='submit'>Get Started</button>
          </form>
        </div>
      )
  }
})
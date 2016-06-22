import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      email: 'eeee@gggg.com',
      password: 'password',
      error: false
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
    app.me.login(this.state);
  },
  render() {
    var createConvo = app.me.token ? (<div> Create Convo</div>) :<div> </div>; //works but not reactive, needs to be reactive
    return (
        <div className='container'>
          <h1>Register</h1>
          <h1>email preset for easy login testing</h1>
          <form onSubmit={this.onSubmit} >
            <input name='email' onChange={this.onEmailChange} value={this.state.email} />
            <input name='password' onChange={this.onPasswordChange} value={this.state.password} />
            <button type='submit'>Login</button>
          </form>
          {createConvo}
        </div>
      )
  }
})
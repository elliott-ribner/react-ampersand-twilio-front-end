import React from 'react'
import NavHelper from './nav-helper'

export default React.createClass({
  render() {
    return (
        <NavHelper className='container'>
          <header role='banner'>
            <h1>Create Your Convo</h1>
          </header>
          <div>
            <p>Login or Register to get started!</p>
            <a href='/login' className='button button-large'>
              <span className='mega-octicon octicon-mark-github'></span> Login
            </a>
            <a href='/register' className='button button-large'>
              <span className='mega-octicon octicon-mark-github'></span> Register
            </a>
          </div>
        </NavHelper>
      )
  }
})
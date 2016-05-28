import React from 'react';
import NavHelper from './nav-helper'

export default React.createClass({
  render() {
    return (
      <NavHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Create-A-Convo</li>
            <li><a href='/repos'>Create Conversation</a></li>
            <li className='pull-right'><a href='/'>Logout</a></li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
      )
  }
})
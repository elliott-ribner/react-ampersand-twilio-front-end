import React from 'react'
import ConvoCollection from '../models/convos-collection'

export default React.createClass({
  getInitialState() {
    return {
      defaultResponse: 'Enter Default Response Here',
      phoneNumber: 'Enter your twilio nubmer here',
      owner: app.me.email
    }
  },
  onDefaultResponseChange(event) {
    event.preventDefault();
    this.setState({
      defaultResponse: event.target.value
    })
  },
  onPhoneNumberChange(event) {
    event.preventDefault();
    this.setState({
      phoneNumber: event.target.value
    })
  },
  onOwnerChange(event) {
    event.preventDefault();
    this.setState({
      owner: event.target.value
    })
  },
  onSubmit(event) {
    event.preventDefault()
    const myConvo = app.me.convos.create(this.state.defaultResponse, this.state.phoneNumber, this.state.owner);
    app.me.convos = [myConvo];
    //save this to subcollection of convo
    //redirect to convostep page
  },
  
  render() {
    return (
        <div className='container'>
          <h1>Create A Conversation</h1>
          <form onSubmit={this.onSubmit} >
            <input name='name' onChange={this.onDefaultResponseChange} value={this.state.defaultResponse} /><br />
            <input name='type' onChange={this.onPhoneNumberChange} value={this.state.phoneNumber} /><br />
            <input name='question' onChange={this.onOwnerChange} value={this.state.owner} /><br />
            <button type='submit'>Set Values and create Convo Steps</button>
          </form>

        </div>
      )
  }
})
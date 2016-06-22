import React from 'react'
import ConvoCollection from '../models/convos-collection';
import Step from '../models/step'

export default React.createClass({
  getInitialState() {
    return {
      name: 'Enter Default Response Here',
      body: 'Enter your twilio nubmer here',
      expectedResponse: 'String'
    }
  },
  onNameChange(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  },
  onBodyChange(event) {
    event.preventDefault();
    this.setState({
      body: event.target.value
    })
  },
  onExpectedResponseChange(event) {
    event.preventDefault();
    this.setState({
      expectedResponse: event.target.value
    })
  },
  onSubmit(event) {
    event.preventDefault()
    const myStep = app.me.convos[0].steps.create(this.state.name, this.state.body, this.state.expectedResponse);
    app.me.convos[0].steps = [myStep];
    //save this to subcollection of convo
    //redirect to convostep page
  },
  
  render() {
    return (
        <div className='container'>
         <p>STEP</p>
          <form onSubmit={this.onSubmit} >
            <input name='name' onChange={this.onNameChange} value={this.state.name} /><br />
            <input name='type' onChange={this.onBodyChange} value={this.state.body} /><br />
            <input name='question' onChange={this.onExpectedResponseChange} value={this.state.expectedResponse} /><br />
            <button type='submit'>Set Convo Step</button>
          </form>
        </div>
      )
  }
})
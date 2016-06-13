import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      name: 'Name step for future export',
      responseType: 'String, Number, Boolean',
      question: 'example: What is your first name',
    }
  },
  onNameChange(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  },
  onTypeChange(event) {
    event.preventDefault();
    this.setState({
      responseType: event.target.value
    })
  },
  onQuestionChange(event) {
    event.preventDefault();
    this.setState({
      question: event.target.value
    })
  },
  onSubmit(event) {
    event.preventDefault();
    //add this locally to step model, dont write to database should create child model of me then add to array inside this child model. When all steps are written we then move to next step
  },
  render() {
    return (
        <div className='container'>
          <h1>Convo</h1>
          <form onSubmit={this.onSubmit} >
            <input name='name' onChange={this.onNameChange} value={this.state.name} />
            <input name='type' onChange={this.onTypeChange} value={this.state.responseType} />
            <input name='question' onChange={this.onQuestionChange} value={this.state.question} />
            <button type='submit'>Add step</button>
          </form>
        </div>
      )
  }
})
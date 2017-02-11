import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import '../ReportABug.scss';

class ReportABug extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bugName: '',
      bugDescription: '',
      name: '',
      errorText: '',
      error: false,
      submittedBug: false
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if(!this.state.bugName || !this.state.bugDescription || !this.state.name)
    {
      this.setState({error: true, errorText: "One or more invalid fields!"});
    }
    else {
      axios.post('report-a-bug', this.state)
      .then(this.setState({
        submittedBug: true
      }))
    }
  }

  onChangeHandler(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    return (
      {
        this.state.submittedBug 
        ? <div>
            <h2>Thanks for helping to improve Code Battle!</h2>
            <img
            alt='Leo saying thanks'
            className='thanks'
            src='https://media.giphy.com/media/awpqNsKuFtXI4/giphy.gif' />
          </div>
      }
      <div>
        { this.state.error
          ? <div style={{color: "red"}}>{ this.state.errorText }</div>
          : null
        }
        <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
          <input type="text" id="bugName" placeholder="bug name" className="bugForm"></input>
          <textarea id="bugDescription" placeholder="bug description" className="bugForm"></textarea>
          <input type="text" id="name" placeholder="your name" className="bugForm"></input>
          <button type="submit" id="bugSubmit" className="btn btn-primary btn-small">Submit</button>
        </form>
      </div>
    )
  }
}

export default ReportABug;

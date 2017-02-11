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
      error: false
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if(!this.state.bugName || !this.state.bugDescription || !this.state.name ||)
    {
      this.setState({error: true, errorText: "One or more invalid fields!"});
    }
    else {
      axios.post('signup', this.state)
      .then(result => {
        if(result.data === "user exists") this.setState({error: true, errorText: "User already exists!"});
        else {
          this.props.setLoggedInUser(result.data);
          browserHistory.push('/');
        }
      })
    }
  }

  onChangeHandler(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    return (
      <div>
        { this.state.error
          ? <div style={{color: "red"}}>{ this.state.errorText }</div>
          : null
        }
        <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
          <input type="text" id="bugName" placeholder="bug name" className="bugForm"></input>
          <input type="text" id="bugDescription" placeholder="bug description" className="loginForm"></input>
          <input type="text" id="name" placeholder="name" className="loginForm"></input>
          <button type="submit" id="bugSubmit" className="btn btn-primary btn-small">Submit</button>
        </form>
      </div>
    )
  }
}

export default ReportABug;

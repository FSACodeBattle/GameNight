import React from 'react';
import axios from 'axios';
import  { setUser } from '../../../store/user';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import '../Signup.scss';

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      signupUsername: '',
      signupPassword: '',
      confirmPassword: '',
      name: '',
      email: '',
      errorText: '',
      error: false
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if(!this.state.signupUsername || !this.state.signupPassword || !this.state.confirmPassword
        || !this.state.name || !this.state.email)
    {
      this.setState({error: true, errorText: "One or more invalid fields!"});
    }
    else if(this.state.signupPassword !== this.state.confirmPassword) {
      this.setState({error: true, errorText: "Passwords do not match!"});
    }
    else {
      axios.post('/signup', this.state)
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
          <input type="text" id="signupUsername" placeholder="username" className="loginForm"></input>
          <input type="password" id="signupPassword" placeholder="password" className="loginForm"></input>
          <input type="password" id="confirmPassword" placeholder="confirm password" className="loginForm"></input>
          <input type="text" id="name" placeholder="name" className="loginForm"></input>
          <input type="text" id="email" placeholder="email" className="loginForm"></input>
          <button type="submit" id="signupSubmit" className="btn btn-primary btn-small" onClick={this.onSubmitHandler}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: function(user) {
      dispatch(setUser(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup);

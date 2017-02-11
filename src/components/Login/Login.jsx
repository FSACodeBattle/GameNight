import React from 'react';
import axios from 'axios';
import { setUser } from '../../store/user';
import { fetchMatches } from '../../store/match';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    axios.post('/signin', this.state)
    .then(user => this.props.setLoggedInUser(user.data));
  }

  onChangeHandler(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    return (
      <div className="loginComponent">
        <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
          <input type="text" id="username" placeholder="username"></input>
          <input type="password" id="password" placeholder="password"></input>
          <button type="submit" className="btn btn-primary btn-small" id="loginSubmit">Submit</button>
          <Link to="/signup" style={{color: "lightBlue"}}>[Sign Up]</Link>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: function(user) {
      dispatch(setUser(user));
      dispatch(fetchMatches(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);

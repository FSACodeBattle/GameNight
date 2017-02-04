import React from 'react';
import axios from 'axios';
import create from '../../store/createStore';
import { setUser } from '../../store/user';
const store = create();
import { Link } from 'react-router';

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
    .then(user => store.dispatch(setUser(user.data)));
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
          <button type="submit">Submit</button>
          <Link to="/signup">[Sign Up]</Link>
        </form>
      </div>
    )
  }
}

export default Login;

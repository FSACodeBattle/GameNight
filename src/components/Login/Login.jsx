import React from 'react';
import axios from 'axios';
import create from '../../store/createStore';
import { setUser } from '../../store/user';
const store = create();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    console.log(this.props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log("I'm Here");

    axios.post('/signin', this.state)
    .then(user => store.dispatch(setUser(user.data)));
  }

  onChangeHandler(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    return (
      <div>
        <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
          <label>Username: </label>
          <input type="text" id="username"></input>
          <label>Password: </label>
          <input type="text" id="password"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;

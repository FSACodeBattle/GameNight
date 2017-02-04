import React from 'react';
import axios from 'axios';
import create from '../../../store/createStore';
const store = create();
import  { setUser } from '../../../store/user';

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
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
    if(!this.state.username || !this.state.password || !this.state.confirmPassword
        || !this.state.name || !this.state.email)
    {
      this.setState({error: true, errorText: "One or more invalid fields!"});
    }
    else if(this.state.password !== this.state.confirmPassword) {
      this.setState({error: true, errorText: "Passwords do not match!"});
    }
    else {
      axios.post('signup', this.state)
      .then(result => {
        if(result.data === "user exists") this.setState({error: true, errorText: "User already exists!"});
        else {
          store.dispatch(setUser(result.data));
          this.props.router.push('/');
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
          <input type="text" id="username" placeholder="username" className="loginForm"></input>
          <input type="password" id="password" placeholder="password" className="loginForm"></input>
          <input type="password" id="confirmPassword" placeholder="confirm password" className="loginForm"></input>
          <input type="text" id="name" placeholder="name" className="loginForm"></input>
          <input type="text" id="email" placeholder="email" className="loginForm"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup;

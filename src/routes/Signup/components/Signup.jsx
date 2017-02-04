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
      name: '',
      password: '',
      userExists: false
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    axios.post('signup', this.state)
    .then(result => {
      console.log(result, result.data === 'user exists');
      if(result.data === "user exists") this.setState({userExists: true});
      else {
        store.dispatch(setUser(result.data));
        this.props.router.push('/');
      }
    })
  }

  onChangeHandler(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    return (
      <div>
        { this.state.userExists
          ? <div style={{color: "red"}}>User already exists!</div>
          : null
        }
        <form onChange={this.onChangeHandler} onSubmit={this.onSubmitHandler}>
          <input type="text" id="username" placeholder="username" className="loginForm"></input>
          <input type="password" id="password" placeholder="password" className="loginForm"></input>
          <input type="password" id="confirmPassword" placeholder="confirmPassword" className="loginForm"></input>
          <input type="text" id="name" placeholder="name" className="loginForm"></input>
          <input type="text" id="email" placeholder="email" className="loginForm"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup;

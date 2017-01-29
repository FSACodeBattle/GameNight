import React, { Component } from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import store from '../../store/createStore';
import Home from '../../routes/Home';
import './CoreLayout.scss';
import '../../styles/core.scss';

class CoreLayout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {children} = this.props
    return (
      <div className='container text-center'>
        <Header />
        <div className='core-layout__viewport'>
          { children }
        </div>
      </div>
    )
  }
}


export default CoreLayout;
